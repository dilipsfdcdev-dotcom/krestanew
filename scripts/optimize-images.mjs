#!/usr/bin/env node
/**
 * Image Optimization Script
 * Compresses large images and converts to WebP format
 * Run with: node scripts/optimize-images.mjs
 */

import sharp from 'sharp';
import { readdir, stat, mkdir } from 'fs/promises';
import { join, extname, basename } from 'path';

const PUBLIC_DIR = './public';
const QUALITY = 80; // WebP quality (0-100)
const MAX_WIDTH = 1920; // Max width for large images
const SIZE_THRESHOLD = 500 * 1024; // Only optimize images > 500KB

async function getImageFiles(dir) {
  const files = [];
  const entries = await readdir(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...await getImageFiles(fullPath));
    } else {
      const ext = extname(entry.name).toLowerCase();
      if (['.jpg', '.jpeg', '.png'].includes(ext)) {
        files.push(fullPath);
      }
    }
  }
  return files;
}

async function optimizeImage(filePath) {
  const stats = await stat(filePath);
  const originalSize = stats.size;

  // Skip small images
  if (originalSize < SIZE_THRESHOLD) {
    return null;
  }

  const outputPath = filePath.replace(/\.(jpg|jpeg|png)$/i, '.webp');

  try {
    const image = sharp(filePath);
    const metadata = await image.metadata();

    // Resize if too large
    let pipeline = image;
    if (metadata.width && metadata.width > MAX_WIDTH) {
      pipeline = pipeline.resize(MAX_WIDTH, null, { withoutEnlargement: true });
    }

    await pipeline
      .webp({ quality: QUALITY })
      .toFile(outputPath);

    const newStats = await stat(outputPath);
    const savedBytes = originalSize - newStats.size;
    const savedPercent = ((savedBytes / originalSize) * 100).toFixed(1);

    return {
      original: filePath,
      optimized: outputPath,
      originalSize: (originalSize / 1024 / 1024).toFixed(2) + 'MB',
      newSize: (newStats.size / 1024 / 1024).toFixed(2) + 'MB',
      saved: savedPercent + '%',
    };
  } catch (error) {
    console.error(`Error optimizing ${filePath}:`, error.message);
    return null;
  }
}

async function main() {
  console.log('🖼️  Image Optimization Script\n');
  console.log('Scanning for large images (> 500KB)...\n');

  const images = await getImageFiles(PUBLIC_DIR);
  const results = [];

  for (const image of images) {
    const result = await optimizeImage(image);
    if (result) {
      results.push(result);
      console.log(`✅ ${basename(result.original)}`);
      console.log(`   ${result.originalSize} → ${result.newSize} (saved ${result.saved})\n`);
    }
  }

  if (results.length === 0) {
    console.log('No large images found to optimize.');
  } else {
    console.log(`\n🎉 Optimized ${results.length} images!`);
    console.log('\nTo use WebP images, update your components to use .webp extension');
    console.log('or let Next.js Image component handle the conversion automatically.');
  }
}

main().catch(console.error);
