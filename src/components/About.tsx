'use client';

import { motion, MotionValue, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

type Chapter = {
  tag: string;
  title: string;
  body: string;
  image: string;
};

const chapters: Chapter[] = [
  {
    tag: '01 · Land',
    title: 'Every parcel, a commitment.',
    body:
      'We begin with topography — reading contour, canopy and water before drawing a single line. The result is land that keeps its character as it becomes a home.',
    image:
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=75&w=1400',
  },
  {
    tag: '02 · Craft',
    title: 'Built like an heirloom.',
    body:
      'Premium materials, slow detailing, and engineering that outlives trends. We design for generations, not seasons — so value compounds with time.',
    image:
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=75&w=1400',
  },
  {
    tag: '03 · Forest',
    title: 'A living estate, not a plotted one.',
    body:
      'Six hundred to nine hundred native plants per plot, curated into working micro-forests. Shade, fruit, fragrance and biodiversity — composed, not scattered.',
    image:
      'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&q=75&w=1400',
  },
];

function ChapterMedia({
  progress,
  index,
  total,
  image,
}: {
  progress: MotionValue<number>;
  index: number;
  total: number;
  image: string;
}) {
  const start = index / total;
  const end = (index + 1) / total;
  const mid = (start + end) / 2;
  const opacity = useTransform(
    progress,
    [start, mid - 0.01, mid + 0.01, end],
    [0, 1, 1, 0]
  );
  const scale = useTransform(progress, [start, end], [1.05, 1.15]);
  return (
    <motion.div style={{ opacity, scale }} className="absolute inset-0">
      <Image src={image} alt="" fill sizes="100vw" className="object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/70 to-[#050505]/40" />
    </motion.div>
  );
}

function ChapterText({
  progress,
  index,
  total,
  chapter,
}: {
  progress: MotionValue<number>;
  index: number;
  total: number;
  chapter: Chapter;
}) {
  const start = index / total;
  const end = (index + 1) / total;
  const mid = (start + end) / 2;
  const opacity = useTransform(
    progress,
    [start, mid - 0.02, mid + 0.02, end],
    [0, 1, 1, 0]
  );
  const y = useTransform(progress, [start, end], [40, -40]);
  return (
    <motion.div
      style={{ opacity, y }}
      className="absolute inset-0 flex flex-col justify-end"
    >
      <p className="text-[11px] tracking-[0.4em] uppercase text-[#c9a962] mb-5">
        {chapter.tag}
      </p>
      <h3 className="text-hero text-white max-w-3xl">{chapter.title}</h3>
      <p className="mt-6 max-w-xl text-white/70 text-[15px] md:text-base leading-relaxed">
        {chapter.body}
      </p>
    </motion.div>
  );
}

function ChapterTick({
  progress,
  index,
  total,
}: {
  progress: MotionValue<number>;
  index: number;
  total: number;
}) {
  const start = index / total;
  const end = (index + 1) / total;
  const opacity = useTransform(progress, [start, end], [0.3, 1]);
  return <motion.span style={{ opacity }} className="block w-8 h-px bg-[#c9a962]" />;
}

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end'],
  });

  const total = chapters.length;

  return (
    <section id="vision" ref={ref} className="relative bg-[#050505]">
      <div className="container-edge pt-32 md:pt-48 pb-24 md:pb-32">
        <div className="max-w-4xl">
          <p className="text-eyebrow mb-6">Philosophy</p>
          <h2 className="text-section text-gradient-fade">
            We design land the way architects design buildings — considered,
            patient, and built to be inherited.
          </h2>
          <div className="mt-10 h-px w-24 bg-[#c9a962]" />
        </div>
      </div>

      <div className="relative" style={{ height: `${total * 100}vh` }}>
        <div className="sticky top-0 h-screen overflow-hidden">
          {chapters.map((c, i) => (
            <ChapterMedia
              key={c.tag}
              progress={scrollYProgress}
              index={i}
              total={total}
              image={c.image}
            />
          ))}

          <div className="absolute top-10 left-6 md:left-10 z-10 text-[11px] tracking-[0.35em] uppercase text-white/50">
            Scroll · Story
          </div>

          <div className="relative z-10 h-full container-edge flex items-end pb-20 md:pb-28">
            <div className="w-full grid md:grid-cols-12 gap-8">
              <div className="md:col-span-1 hidden md:flex flex-col gap-3 self-end">
                {chapters.map((c, i) => (
                  <ChapterTick
                    key={c.tag}
                    progress={scrollYProgress}
                    index={i}
                    total={total}
                  />
                ))}
              </div>

              <div className="md:col-span-10 md:col-start-2 relative min-h-[55vh]">
                {chapters.map((c, i) => (
                  <ChapterText
                    key={c.tag}
                    progress={scrollYProgress}
                    index={i}
                    total={total}
                    chapter={c}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
