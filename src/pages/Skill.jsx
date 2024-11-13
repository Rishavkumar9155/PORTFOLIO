import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const DemoComponent = () => {
  useEffect(() => {
    const showDemo = () => {
      document.body.style.overflow = 'auto';
      document.scrollingElement.scrollTo(0, 0);

      document.querySelectorAll('section').forEach((section, index) => {
        const wrapper = section.querySelector('.wrapper');
        const [x, xEnd] = index % 2
          ? ['100%', (wrapper.scrollWidth - section.offsetWidth) * -1]
          : [wrapper.scrollWidth * -1, 0];

        gsap.fromTo(wrapper, { x }, {
          x: xEnd,
          scrollTrigger: {
            trigger: section,
            scrub: 0.5,
          },
        });
      });
    };

    showDemo();

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const techArray = [
    "React JS", "Bootstrap", "Tailwind CSS", "HTML", 
    "CSS", "JavaScript", "GSAP", "Three.js"
  ];

  return (
    <div className="relative scmain bg-black text-white h-[150vh] font-[dot1]">
      {/* Demo Content */}
      <div className="demo-wrapper">
        {/* Header */}
        {/* Demo Text Section */}
        <section className="demo-text">
          <div className="wrapper text-[12vw] font-[dot1] text-white glow-effect2 font-semibold text-center">
            Inimitable Skills
          </div>
        </section>

        {/* Tech Stack Sections */}
        {[...Array(2)].map((_, index) => (
          <section key={index} className="demo-gallery h-[25vh]  bg-[#09e347ff] mb-2 flex items-center justify-center">
            <ul className="wrapper flex justify-center space-x-4 ">
              {techArray.map((tech, i) => (
                <li key={i} className="relative w-[250px] h-[150px] sm:w-[300px] sm:h-[200px] flex items-center justify-center">
                  <div className="text-[4vw] fonty  font-semibold font-[dot3] text-white glow-effect2">{tech}</div>
                </li>
              ))}
            </ul>
          </section>
        ))}

        {/* Another Text Section */}
        <section className="demo-text">
          <div className="wrapper text-[12vw] font-[dot1] font-semiboldtext-white glow-effect2 text-center">
            CreativeDesign
          </div>
        </section>
      </div>
    </div>
  );
};

export default DemoComponent;
