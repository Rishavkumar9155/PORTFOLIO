import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import video1 from "../assets/video1.mp4";
import image from "../assets/rishcircle.png";
import { IoCall } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import { RxLinkedinLogo } from "react-icons/rx";
import { ImGithub } from "react-icons/im";
import { IoIosMail } from "react-icons/io";

gsap.registerPlugin(ScrollTrigger);

const Page3 = () => {
  const imageRef = useRef(null);
  const textRef = useRef(null);
  const iconsRef = useRef([]);

  useEffect(() => {
    gsap.to(textRef.current, {
      textShadow: "0 0 10px rgba(255, 255, 255, 0.7), 0 0 20px rgba(255, 255, 255, 0.6), 0 0 30px rgba(255, 255, 255, 0.5), 0 0 40px rgba(255, 255, 255, 0.4)",
      color: "rgb(255, 255, 255)",
      duration: 1,
      ease: "power1.inOut",
    });

    gsap.to(imageRef.current, {
      y: "-30px",
      duration: 1.5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      delay: 0.5,
    });

    gsap.to(textRef.current, {
      y: "-30px",
      repeat: -1,
      yoyo: true,
      duration: 1.5,
      ease: "sine.inOut",
    });

    gsap.to(iconsRef.current, {
      y: "-10px",
      repeat: -1,
      yoyo: true,
      duration: 1,
      textShadow: "0 0 10px rgba(255, 255, 255, 0.7), 0 0 20px rgba(255, 255, 255, 0.6), 0 0 30px rgba(255, 255, 255, 0.5), 0 0 40px rgba(255, 255, 255, 0.4)",
      color: "rgb(255, 255, 255)",
      ease: "sine.inOut",
      stagger: 0.2,
    });
  }, []);

  return (
    <div className="h-[100vh] w-full text-4xl sticky bottom-0 z-[-1] text-white">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
      >
        <source src={video1} type="video/mp4" />
      </video>

      <div className="relative z-10 flex items-center  justify-center h-full overflow-hidden w-full backdrop-blur-[2px] flex-col md:flex-row">
        
        <div className="order-2 md:order-1 h-[65vh] w-full flex flex-col items-center justify-center px-4 py-6 rounded-lg bg-opacity-30 backdrop-blur-sm">
         
         
          <h2 className="text-white text-3xl font-semibold mb-4 text-center font-[dot3]">Contact Us</h2>
          <form action="https://api.web3forms.com/submit" method="POST" className="w-full h-[50vh] max-w-md flex flex-col gap-4 font-[dot3]">
            <input type="hidden" name="access_key" value="1cf7b8b4-fdc9-40b1-83b4-da55c167f9f5" />
            <input
              className="uppercase bg-transparent border-b-[1px] border-white outline-none text-white placeholder-white text-lg py-1"
              type="text"
              name="name"
              placeholder="Enter Name"
            />
            <input
              className="bg-transparent border-b-[1px] border-white outline-none text-white placeholder-white text-lg py-1"
              type="email"
              name="email"
              placeholder="Enter Email"
            />
            <textarea
              className="uppercase bg-transparent border-white border-[1px] outline-none text-white placeholder-white text-lg p-2 resize-none"
              name="message"
              placeholder="Enter Message"
              rows="3"
            />
            <button
              type="submit"
              className="bg-gray-200 text-black py-2 rounded-sm hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
            >
              Submit
            </button>
          </form>
        </div>

        <div className="order-1 md:order-2 h-[70vh] gap-[6vh] w-full flex flex-col font-[dot1] font-semibold text-[8vw] items-center justify-start pl-5">
          <div className="flex items-end justify-end mt-[27%]">
            <img ref={imageRef} className="h-[12vh] w-[12vh]" src={image} alt="Rishcircle" />
            <h1 ref={textRef} className="blend flex flex-col gap-[8vh]  ">
              Let's work   <span> together</span> 
            </h1> 
          </div>
          <div className="social h-[7vh] w-full flex items-center justify-start pl-[6vw] mt-[7vh] gap-5 text-[3vh]">
            <a href="tel:+7209664086" ref={(el) => (iconsRef.current[0] = el)} className="text-white hover:text-gray-300 transition-colors"><IoCall /></a>
            <a href="https://www.instagram.com/rishavkumar1344/profilecard/?igsh=MW9wMXUxZWF6enB0cQ==" ref={(el) => (iconsRef.current[1] = el)} className="text-white hover:text-gray-300 transition-colors"><FaInstagram /></a>
            <a href="https://www.linkedin.com/in/rishav-kumar-1616b21a7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" ref={(el) => (iconsRef.current[2] = el)} className="text-white hover:text-gray-300 transition-colors"><RxLinkedinLogo /></a>
            <a href="https://github.com/Rishavkumar9155/SCRATCH-APP.git" ref={(el) => (iconsRef.current[3] = el)} className="text-white hover:text-gray-300 transition-colors"><ImGithub /></a>
            <a href="mailto:rishu9905213580@gmail.com" ref={(el) => (iconsRef.current[4] = el)} className="text-white hover:text-gray-300 transition-colors"><IoIosMail /></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page3;
