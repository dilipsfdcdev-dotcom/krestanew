'use client';

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface FloatingGeometryProps {
  scrollProgress: number;
}

function FloatingRing({ position, rotation, scale, speed, color }: {
  position: [number, number, number];
  rotation: [number, number, number];
  scale: number;
  speed: number;
  color: string;
}) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    const t = state.clock.elapsedTime * speed;
    meshRef.current.rotation.x = rotation[0] + t;
    meshRef.current.rotation.y = rotation[1] + t * 0.7;
    meshRef.current.position.y = position[1] + Math.sin(t) * 0.5;
  });

  return (
    <mesh ref={meshRef} position={position} scale={scale}>
      <torusGeometry args={[1, 0.02, 16, 64]} />
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={0.3}
        transparent
        opacity={0.4}
        wireframe
      />
    </mesh>
  );
}

function FloatingOctahedron({ position, speed, color }: {
  position: [number, number, number];
  speed: number;
  color: string;
}) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    const t = state.clock.elapsedTime * speed;
    meshRef.current.rotation.x = t;
    meshRef.current.rotation.z = t * 0.5;
    meshRef.current.position.y = position[1] + Math.sin(t * 0.8) * 0.8;
  });

  return (
    <mesh ref={meshRef} position={position}>
      <octahedronGeometry args={[0.3]} />
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={0.2}
        transparent
        opacity={0.3}
        wireframe
      />
    </mesh>
  );
}

export default function FloatingGeometry({ scrollProgress }: FloatingGeometryProps) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame(() => {
    if (!groupRef.current) return;
    groupRef.current.position.y = -scrollProgress * 8;
    groupRef.current.rotation.y = scrollProgress * Math.PI * 0.3;
  });

  return (
    <group ref={groupRef}>
      <FloatingRing
        position={[-6, 2, -5]}
        rotation={[0.5, 0, 0]}
        scale={1.5}
        speed={0.3}
        color="#c9a962"
      />
      <FloatingRing
        position={[7, -1, -8]}
        rotation={[0, 0.5, 0]}
        scale={2}
        speed={0.2}
        color="#2d6a4f"
      />
      <FloatingRing
        position={[0, 4, -10]}
        rotation={[0.3, 0.3, 0]}
        scale={2.5}
        speed={0.15}
        color="#c9a962"
      />
      <FloatingOctahedron
        position={[-4, -3, -6]}
        speed={0.4}
        color="#c9a962"
      />
      <FloatingOctahedron
        position={[5, 3, -7]}
        speed={0.3}
        color="#2d6a4f"
      />
      <FloatingOctahedron
        position={[2, -4, -9]}
        speed={0.25}
        color="#e8d5a3"
      />
    </group>
  );
}
