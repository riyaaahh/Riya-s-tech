import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import riya1 from "./../../assets/riya1.jpg";
import riya2 from "./../../assets/riya2.jpg";
import riya3 from "./../../assets/riya3.jpg";
import reactimg from "./../../assets/reactlogo.jpg";
import gsapimg from "./../../assets/gsaplogo.jpg";
import tailwindimg from "./../../assets/tailwindlogo.jpg";

import gsap from "gsap";
import SplitText from "gsap/SplitText";

gsap.registerPlugin(SplitText);

const Index = () => {
  const headingRef = useRef(null);

  const buttonRef = useRef(null);
  const sliderRef = useRef(null);

  // SplitText Animation for Heading
  useEffect(() => {
    const split = new SplitText(headingRef.current, {
      type: "lines",
      linesClass: "lineChildren",
    });

    gsap.from(split.lines, {
      duration: 2,
      y: 100,
      opacity: 0,
      stagger: 0.75,
      ease: "power4.out",
    });

    return () => split.revert();
  }, []);
  // button Animation for Heading
  useEffect(() => {
    const el = buttonRef.current;
  
    const glitchTimeline = gsap.timeline();
  
    glitchTimeline.fromTo(el, {
      opacity: 0,
      x: -20,
      filter: "blur(8px)",
    }, {
      opacity: 1,
      x: 0,
      filter: "blur(0px)",
      duration: 2,
      ease: "power4.out",
    });
  
    glitchTimeline.to(el, {
      x: "+=2",
      duration: 0.05,
      repeat: 5,
      yoyo: true,
      ease: "power1.inOut",
    }, "<0.5"); // Start during the first animation
  
  }, []);

  // Infinite Horizontal Coverflow Image Animation
  useEffect(() => {
    const slider = sliderRef.current;
    const totalWidth = slider.scrollWidth;

    gsap.to(slider, {
      x: -totalWidth / 2,
      duration: 30,
      ease: "linear",
      repeat: -1,
    });
  }, []);

  const images = [
    riya1,
    riya2,
    riya3,
    riya1,
    riya2,
    riya3,
    riya1,
    riya2,
    riya3,
    riya1,
    riya2,
    riya3,
    riya1,
    riya2,
    riya3,
    riya1,
    riya2,
    riya3,
    riya1,
    riya2,
    riya3,
    riya1,
    riya2,
  ]; // loop for infinite feel

  return (
    <div>
      {/* NAVBAR */}
      <div  className="flex text-russian-500 justify-between  p-8">
        <div  className="text-2xl font-title">Shifna Riya</div>
        <div className="flex gap-24 font-semibold font-montserrat">
          <div>myself</div>
          <Link to="/about">
            <div>about riya</div>
          </Link>
          <Link to="/resume">
            <div>resume</div>
          </Link>
          <Link to="/connect">
            <div>connect</div>
          </Link>
        </div>
      </div>

      {/* MAIN SECTION */}
      <div className="w-full  gap-10 flex justify-between text-center">
        <div className="w-full">
          {/* Infinite GSAP Image Slider */}
          <div className="overflow-hidden mx-8 py-10">
            <div ref={sliderRef} className="flex gap-10 w-max">
              {images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  className="w-80 h-96 object-cover border-2 border-black rounded-xl shadow-lg"
                />
              ))}
            </div>
          </div>
          <div className="flex text-center justify-between mx-8">
            <div ref={headingRef}>
              <div className="font-unbounded text-5xl    ">
                I can design your dream websites.
              </div>
              
            </div>
            <div ref={buttonRef}>
              <Link to="/connect">
                <a
                  href="#connect" className=" inline-block px-6 py-3 bg-black text-white rounded-md shadow-md hover:bg-gray-800 transition-all duration-300" >
                  Hire Me
                </a>
              </Link>{" "}
            </div>
          </div>
          <div className=" mt-10 mx-8 ">
            <div className="flex justify-center items-center gap-6 mt-8 flex-wrap">
              <div>
                <div className="flex text-center justify-between   shadow-lg border border-1 hover:scale-105 transition-transform duration-700 ease-in-out shadow-lg hover:shadow-2xl
                 border-black px-4 py-2 rounded-md">
                  <img src={reactimg} className="w-100 h-14 p-2"/>
                  <div className="mt-4 font-montserrat font-semibold ">
                    react
                  </div>
                </div>
                </div>
              <div className="flex text-center justify-between gap-2  shadow-lg border border-1 hover:scale-105 transition-transform duration-700 ease-in-out shadow-lg hover:shadow-2xl
               border-black px-4 py-2 rounded-md">
                  <img src={gsapimg} className="w-100 h-14 p-1"/>
              <div className="mt-4 font-montserrat font-semibold ">
                 gsap animation
                  </div>
                  </div>
                  <div className="flex text-center justify-between gap-2  shadow-lg border border-1 hover:scale-105 transition-transform duration-700 ease-in-out shadow-lg hover:shadow-2xl
                   border-black px-4 py-2 rounded-md">
                  <img src={tailwindimg} className="w-100 h-14 p-3"/>
              <div className="mt-4 font-montserrat font-semibold ">
                  tailwindcss
                  </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
