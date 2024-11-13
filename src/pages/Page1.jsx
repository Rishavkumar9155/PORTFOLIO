import React, { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Page1 = () => {
  const tilt = useRef(null);
  const [xVal, setXval] = useState(0);
  const [yVal, setYval] = useState(0);

  useGSAP(() => {
    gsap.to(tilt.current, {
      transform: `rotateX(${yVal}deg) rotateY(${xVal}deg)`,
      duration: 10,
      
      ease: "elastic.out(1, 0.25)",
    });
  }, [xVal, yVal]);

  const mouseMoving = (e) => {
    setXval(
      (e.clientX - tilt.current.getBoundingClientRect().x - tilt.current.getBoundingClientRect().width / 2) / 20
    );
    setYval(
      -(e.clientY - tilt.current.getBoundingClientRect().y - tilt.current.getBoundingClientRect().height / 2) / 10
    );
    tilt.current.style.transform = `rotateX(${yVal}deg) rotateY(${xVal}deg)`;
  };

  return (
    <div
      onMouseMove={mouseMoving}
      className=" containermain h-screen w-full  bg-[#ffffff]  "
    >
      <div className="h-full main1 background  flex flex-col relative overflow-hidden">
        <div className="absolute z-40 font-[dot3] ">
          <div ref={tilt} className="box flex items-start justify-start flex-col py-[20vh] sm:py-[30vh] px-[4vw]">
            <h1 className=" glow-effect uppercase text-[10vw] sm:text-[8vw] md:text-[7vw] lg:text-[12vw] leading-[8vh]  text-white">
              I AM <span className="text-black"> WEB</span>
            </h1>
            <h1 className="uppercase text-[10vw] sm:text-[8vw] md:text-[7vw] lg:text-[12vw] leading-[10vw]  or">
              developer
            </h1>
            <h1 className=" glow-effect uppercase text-[10vw] sm:text-[8vw] md:text-[7vw] lg:text-[12vw] leading-[8vh]  text-white">
              to hire
            </h1>
          </div>
        </div>
        <div className="boxes h-[8vh] sm:h-[10vh] md:h-[12vh] text-white w-full absolute bottom-6 sm:bottom-10 md:bottom-16 flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-16">
  <h1 className="text-base sm:text-[6vw] md:text-2xl lg:text-[3vw] xl:text-2xl font-[dot2]">
    BRAND DESIGN | WEBSITE DESIGN
  </h1>
  <img
    className="disc h-[5vh] sm:h-[7vh] md:h-[8vh] lg:h-[10vh] w-auto"
    src="https://static.wixstatic.com/media/f1c650_ed71078001ef401889b71537cca76dc4~mv2.png/v1/fill/w_220,h_220,al_c,q_85,enc_auto/cssda-wotd-white.png"
    alt="CSSDA Award"
  />
</div>

      </div>
    </div>
  );
};

export default Page1;
