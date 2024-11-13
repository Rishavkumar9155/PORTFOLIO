import React, { useState, useEffect, useRef } from 'react';
import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Bloom, EffectComposer, ToneMapping } from '@react-three/postprocessing';
import { HueSaturation } from '@react-three/postprocessing';
import { BlendFunction } from 'postprocessing';
import Photos from './Photos';
import gsap from 'gsap';

const Scroller = () => {
  const [fov, setFov] = useState(20);  // Default FOV value
  const [showCylinder, setShowCylinder] = useState(false);
  const textRef = useRef(null);
  const cylinderRef = useRef(null);

  useEffect(() => {
    // Handle resizing and set FOV based on screen size
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 768) setFov(50);
      else if (width < 1024) setFov(25);
      else setFov(20);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    
    // Animate text first
    gsap.fromTo(
      textRef.current,
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1, delay: 0.5 }
    );

    // Delay cylinder appearance, then apply animation
    setTimeout(() => {
      setShowCylinder(true);
      gsap.fromTo(
        cylinderRef.current.scale,
        { x: 0, y: 0, z: 0 },
        { x: 1, y: 1, z: 1, duration: 1 }
      );
    }, 1500);

    // Cleanup event listener on unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="scroller h-screen w-full bg-black sticky   flex flex-col items-center justify-center">
      <Canvas
        camera={{ fov }}
        className="w-full h-full"
        style={{
          height: '100vh',
          width: '100%',
          overflow: 'hidden',
        }}
      >
        <OrbitControls enableZoom={false} />
        <ambientLight />
        
        {/* Conditionally render cylinder with GSAP animation */}
        {showCylinder && (
          <group ref={cylinderRef}>
            <Photos />
          </group>
        )}

        <EffectComposer>
          <Bloom
            mipmapBlur
            intensity={13.0}
            luminanceThreshold={0}
            luminanceSmoothing={0}
          />
          <ToneMapping adaptive />
          <HueSaturation
            blendFunction={BlendFunction.NORMAL}
            hue={0}
            saturation={0.6}
          />
        </EffectComposer>
      </Canvas>

      {/* Animated Text with GSAP */}
      <div
  ref={textRef}
  className="absolute glow-effect h-[20vh] flex items-center justify-center w-full text-white font-[dot2] font-semibold 
    text-[10vw] sm:text-[15vw] md:text-[15vw] lg:text-[12vw] xl:text-[13vw]"
>
  INTERACTIVE DESIGN
</div>

    </div>
  );
};

export default Scroller;
