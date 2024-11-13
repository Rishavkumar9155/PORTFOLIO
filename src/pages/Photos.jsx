import React, { useRef } from 'react';
import { useTexture } from '@react-three/drei';
import * as THREE from 'three';
import image from "../assets/rish2.png";
import { useFrame } from '@react-three/fiber';

const Photos = () => {
  const tex = useTexture(image); // Load the texture for the cylinder's surface
  const cyl = useRef(null); // Reference to the cylinder mesh

  useFrame((state, delta) => {
    if (cyl.current) {
      cyl.current.rotation.y += delta; // Rotate the cylinder every frame
    }
  });

  return (
    <group rotation={[0, 1.4, 0.5]}>
      <mesh ref={cyl}>
        {/* Define the cylinder geometry with a large number of segments for smoothness */}
        <cylinderGeometry args={[1, 1, 1, 60, 60, true]} />

        {/* Apply the texture and make the material double-sided */}
        <meshStandardMaterial map={tex} side={THREE.DoubleSide} />
      </mesh>
    </group>
  );
};

export default Photos;
