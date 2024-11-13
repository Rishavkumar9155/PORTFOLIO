import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';; // Import ScrollTrigger
import video2 from "../assets/background2.webm";

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Page2 = () => {
  useEffect(() => {
    // GSAP animation with ScrollTrigger for the boxes
    gsap.fromTo(
      ".box1", 
      { height: "33.33%" }, // initial state
      { 
        height: "0%", // final state
        duration: 8, 
        stagger: 0.2, // stagger each box with 0.5s delay
        scrollTrigger: {
          trigger: ".main", // The element that triggers the animation
          start: "top 10%", // When the top of the .main container reaches the bottom of the viewport
          end: "top",
          // Pin the main container
          scrub: 1,
         // Show markers for debugging
        },
        
      }
    );
  }, []);


  useEffect(() => {
    // GSAP animation with ScrollTrigger for the boxes
    gsap.fromTo(
      ".box2", 
      { height: "33.33%" }, // initial state
      { 
        height: "0%", // final state
        duration: 8, 
        stagger: 0.2, // stagger each box with 0.5s delay
        scrollTrigger: {
          trigger: ".main", // The element that triggers the animation
          start: "top 10%", // When the top of the .main container reaches the bottom of the viewport
          end: "top",
          // Pin the main container
          scrub: 1,
         // Show markers for debugging
        },
        
      }
    );
  }, []);




  useEffect(() => {
    // GSAP animation with ScrollTrigger for the boxes
    gsap.fromTo(
      ".box3", 
      { height: "33.33%" }, // initial state
      { 
        height: "0%", // final state
        duration: 8, 
        stagger: 0.2, // stagger each box with 0.5s delay
        scrollTrigger: {
          trigger: ".main", // The element that triggers the animation
          start: "top 10%", // When the top of the .main container reaches the bottom of the viewport
          end: "top",
          // Pin the main container
          scrub: 1,
         // Show markers for debugging
        },
        
      }
    );
  }, []);

  return (
    <div className='relative main1'>
      <div className="main h-[100%] w-[100%]">
        <video autoPlay muted playsInline preload="auto" loop src={video2}></video>
      </div>

      {/* Box elements */}
      <div className="box1 h-[33.33%] top-[0%] absolute w-full bg-white flex items-center justify-around overflow-hidden">
        <h1 className='font-[dot1] text-black font-semibold text-center text-[10vw] overflow-hidden'>
          WEBSITE
        </h1>
        <h1 className='text-center font-[dot2] text-[2vw] font-bold overflow-hidden'>
          <br />
          Focused on creating visually stunning interfaces and exceptional user experiences. <br />
          Every click is crafted for user-friendly, efficient, and meaningful products.
        </h1>
      </div>

      <div className="box2 h-[33.33%] top-[33.4%] absolute w-full bg-white overflow-hidden flex items-center justify-around">
      <h1 className='text-center font-[dot2] text-[2vw] font-bold overflow-hidden'>
          <br />
          It forms the foundation of your company's identity,<br /> influencing every business decision and ensuring a cohesive, impactful presence in the marketplace.
        </h1>
      <h1 className='font-[dot1] text-black font-semibold text-center text-[10vw] overflow-hidden'>
      BRAND
        </h1>
        
      </div>
      <div className="box3 h-[33.33%] w-full top-[66.8%] absolute bg-white flex items-center justify-around overflow-hidden">

      <h1 className='font-[dot1] text-black font-semibold text-center text-[10vw] overflow-hidden'>
      VISUAL
        </h1>
        <h1 className='text-center font-[dot2] text-[2vw] font-bold overflow-hidden'>
          <br />
         

A brand's visual identity is its distinct visual language,<br /> designed to leave lasting impressions and foster emotional connections with the audience.
        </h1>


      </div>
    </div>
  );
};

export default Page2;
