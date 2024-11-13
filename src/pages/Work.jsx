import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import video from "../assets/background.mp4";
import netflix from "../assets/netflix.mp4"
import news from "../assets/news.mp4"
import scratch from "../assets/scratch.mp4"
import ecommerce from "../assets/ecommerce.mp4"
import todolist from "../assets/todolist.mp4"

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export default function HorizontalScroll() {
  const containerRef = useRef();

  useLayoutEffect(() => {
    // GSAP scroll animation
    gsap.to(containerRef.current, {
      xPercent: -100 * (5.6 - 1), // Adjust for number of panels
      ease: "power2.out",
      scrollTrigger: {
        trigger: containerRef.current,
        pin: true,
        scrub: 2,
        snap: 1 / (4 - 1), // Snap to each panel
        end: () => `+=${containerRef.current.offsetWidth}`, // Scroll container width
      }
    });
  }, []);

  return (
    <div className="App  relative">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        src={video}
        className="absolute top-0 left-0 w-full h-full object-cover"
      />

      {/* Scrollable Container */}
      <div className="container h- full w-full relative z-10" ref={containerRef}>
        <div className="  backdrop-blur-[2px]  text-[20vw] text-white flex glow-effect justify-between  px-10 py-20 items-center  ">work</div>
      
            
                       
            
            
            
        <div className="panel  backdrop-blur-[2px] flex justify-between items-center px-10 py-20">
  {/* Bio Section */}
  <div className="bio-section flex flex-col justify-center items-start w-1/2">
  <h1 className="uppercase text-4xl font-bold glow-effect2">
    Netflix Landing Page
  </h1>
  <p className="mt-4 text-lg font-[dot3] glow-effect2">
    This project showcases the design and functionality of a Netflix-like
    landing page. It focuses on creating a seamless and immersive user
    experience with engaging visuals and smooth animations, using HTML,
    CSS, and React for dynamic interactivity.
  </p>
  
  {/* Visit Button */}
  <button
    onClick={() => window.open("https://github.com/Rishavkumar9155/netflixcloneresponsive")}
    className="mt-6 inline-block bg-white text-black py-[0.5] px-6 rounded-sm text-lg hover:bg-blue-700 hover:text-white transition-all  duration-300"
  >
    Visit
  </button>
</div>

{/* Video Section */}
<div className="video-section flex justify-center items-center w-1/2">
  <video
    autoPlay
    muted
    loop
    className="h-[30vh] w-[60vh] object-cover rounded-md"
    src={netflix}
  />
</div>

</div>






<div className="panel  backdrop-blur-[2px] flex justify-between items-center px-10 py-20">
  {/* Bio Section */}
  <div className="bio-section flex flex-col justify-center items-start w-1/2">
  <h1 className="uppercase text-4xl font-bold glow-effect2">
  news app
  </h1>
  <p className="mt-4 text-lg font-[dot3] glow-effect2">
  news app project sounds impressive! By using React and APIs, it allows for real-time updates and relevant news content, <br />
   while responsiveness ensures accessibility on various devices. <br />
   Let me know if you need any specific feature ideas or tips to enhance the app's functionality or design!
  </p>
  
  {/* Visit Button */}
  <button
    onClick={() => window.open("https://github.com/Rishavkumar9155/NEWS-WEBAPP")}
    className="mt-6 inline-block bg-white text-black py-[0.5] px-6 rounded-sm text-lg hover:bg-blue-700 hover:text-white transition-all  duration-300"
  >
    Visit
  </button>
</div>

{/* Video Section */}
<div className="video-section flex justify-center items-center w-1/2">
  <video
    autoPlay
    muted
    loop
    className="h-[30vh] w-[60vh] object-cover rounded-md"
    src={news}
  />
</div>

</div>




<div className="panel  backdrop-blur-[2px] flex justify-between items-center px-10 py-20">
  {/* Bio Section */}
  <div className="bio-section flex flex-col justify-center items-start w-1/2">
  <h1 className="uppercase text-4xl font-bold glow-effect">
   scratch app
  </h1>
  <p className="mt-4 text-lg font-[dot3] glow-effect2">
  Scratch App project sounds like a highly functional note-taking tool, providing users with flexibility to manage their data efficiently. <br />
   Using React and Tailwind CSS ensures a smooth and responsive user experience, while GSAP adds engaging animations. <br />
   Let me know if you want to explore any additional features or improvements for the app!
  </p>
  
  {/* Visit Button */}
  <button
    onClick={() => window.open("https://scratch-app-weld.vercel.app/")}
    className="mt-6 inline-block bg-white text-black py-[0.5] px-6 rounded-sm text-lg hover:bg-blue-700 hover:text-white transition-all  duration-300"
  >
    Visit
  </button>
</div>

{/* Video Section */}
<div className="video-section flex justify-center items-center w-1/2">
  <video
    autoPlay
    muted
    loop
    className="h-[30vh] w-[60vh] object-cover rounded-md"
    src={scratch}
  />
</div>

</div>





<div className="panel  backdrop-blur-[2px] flex justify-between items-center px-10 py-20">
  {/* Bio Section */}
  <div className="bio-section flex flex-col justify-center items-start w-1/2">
  <h1 className="uppercase text-4xl font-bold glow-effect2">
   ecommerce clothing app
  </h1>
  <p className="mt-4 text-lg font-[dot3] glow-effect2">
  e-commerce website project is shaping up to be both user-friendly and visually engaging! By incorporating features like product listings, a responsive cart, and personalized recommendations, <br />
   you're setting up a platform that enhances the shopping journey. React’s dynamic capabilities will allow you to create interactive,
   
    
   Let me know if you need advice on any specific feature implementations!
  </p>
  
  {/* Visit Button */}
  <button
    onClick={() => window.open("https://github.com/Rishavkumar9155/clothing-web-app.git")}
    className="mt-6 inline-block bg-white text-black py-[0.5] px-6 rounded-sm text-lg hover:bg-blue-700 hover:text-white transition-all  duration-300"
  >
    Visit
  </button>
</div>

{/* Video Section */}
<div className="video-section flex justify-center items-center w-1/2">
  <video
    autoPlay
    muted
    loop
    className="h-[30vh] w-[60vh] object-cover rounded-md"
    src={ecommerce}
  />
</div>

</div>





<div className="panel  backdrop-blur-[2px] flex justify-between items-center px-10 py-20 ">
  {/* Bio Section */}
  <div className="bio-section flex flex-col justify-center items-start w-1/2">
  <h1 className="uppercase text-4xl font-bold glow-effect">
   draggable to-do list
  </h1>
  <p className="mt-4 text-lg font-[dot3] glow-effect2">
  draggable to-do list app sounds like a practical and interactive tool! Saving tasks as cards with date and time tracking offers an organized way to manage and prioritize tasks.
   The draggable functionality adds a hands-on feel, making task management even more intuitive. 
  If you’re looking to add more features like filtering by date or priority, or additional animations, feel free to reach out!
  </p>
  
  {/* Visit Button */}
  <button
    onClick={() => window.open("https://github.com/Rishavkumar9155/todolist-dragable")}
    className="mt-6 inline-block bg-white text-black py-[0.5] px-6 rounded-sm text-lg hover:bg-blue-700 hover:text-white transition-all  duration-300"
  >
    Visit
  </button>
</div>

{/* Video Section */}
<div className="video-section flex justify-center items-center w-1/2">
  <video
    autoPlay
    muted
    loop
    className="h-[30vh] w-[60vh] object-cover rounded-md"
    src={todolist}
  />
</div>

</div>












      </div>
    </div>
  );
}
