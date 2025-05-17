import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import riya1 from './../../assets/riya1.jpg';
import riya2 from './../../assets/riya2.jpg';
import riya3 from './../../assets/riya3.jpg';
import gsap from 'gsap';
import SplitText from 'gsap/SplitText';

gsap.registerPlugin(SplitText);

const Index = () => {
  const headingRef = useRef(null);
  const sliderRef = useRef(null);

  // SplitText Animation for Heading
  useEffect(() => {
    const split = new SplitText(headingRef.current, {
      type: 'lines',
      linesClass: 'lineChildren',
    });

    gsap.from(split.lines, {
      duration: 2,
      y: 100,
      opacity: 0,
      stagger: 0.75,
      ease: 'power4.out',
    });

    return () => split.revert();
  }, []);

  // Infinite Horizontal Coverflow Image Animation
  useEffect(() => {
    const slider = sliderRef.current;
    const totalWidth = slider.scrollWidth;

    gsap.to(slider, {
      x: -totalWidth / 2,
      duration: 30,
      ease: 'linear',
      repeat: -1,
    });
  }, []);

  const images = [riya1, riya2, riya3, riya1, riya2,riya3, riya1, riya2,riya3, riya1, riya2,riya3, riya1, riya2,riya3, riya1, riya2,riya3, riya1, riya2,riya3, riya1, riya2]; // loop for infinite feel

  return (
    <div className='px-10 py-10 w-full min-h-screen '>

      {/* NAVBAR */}
      <div className='flex text-russian-500 justify-between  bg-pink-100 p-8'>
        <div className='text-2xl font-title'>Shifna Riya</div>
        <div className='flex gap-24 font-semibold font-montserrat'>
          <div>myself</div>
          <Link to="/about"><div>about riya</div></Link>
          <Link to="/resume"><div>resume</div></Link>
          <Link to="/connect"><div>connect</div></Link>
        </div>
      </div>

      {/* MAIN SECTION */}
      <div className='w-full  gap-10 flex justify-between text-center'>
       

        <div className='w-full'>
          {/* Infinite GSAP Image Slider */}
          <div className="overflow-hidden w-full py-10">
            
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
          <div ref={headingRef} > 
          
         
          <div className='font-unbounded text-5xl w-full  bg-gray-300  leading-snug'>
          I can design your dream websites.
        </div>
          <div className='font-montserrat font-semibold mt-4'>
          approach me for a beautiful, animated website with quality features.          </div>
          </div>
        </div>
        
      </div>
      
     
    </div>
  );
};

export default Index;
