import React, { useEffect, useRef } from "react";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import Scroller from "./pages/Scroller";

import Page3 from "./pages/Page3";
import Work from "./pages/Work"
import Skill from "./pages/Skill";
import LocomotiveScroll from "locomotive-scroll"; // Import Locomotive Scroll
import "locomotive-scroll/dist/locomotive-scroll.css"; // Import Locomotive Scroll CSS


const App = () => {
  const scrollRef = useRef(null); // Reference to the scroll container

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true, // Enable smooth scrolling
      lerp:0.2, // Adjust the smoothness
    });

    // Cleanup the scroll instance when the component is unmounted
    return () => {
      scroll.destroy();
    };
  }, []);

  return (
    <div className="scroll-container" ref={scrollRef}>
      <Scroller />
      <Page2 />
      <Page1 />
     
     
     <Work/>
      <Skill />
     
      <Page3 />
    </div>
  );
};

export default App;
