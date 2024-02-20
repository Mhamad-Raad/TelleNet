import Image from 'next/image';
import { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';

import './style.css';

const DomainItem = ({ Domain, animation }) => {
  const containerRef = useRef(null);
  const animationRef = useRef();

  const isInView = useInView(animationRef, { once: true });

  let style = '';

  function mouseMoveEvent(e) {
    const { x, y } = containerRef.current.getBoundingClientRect();
    containerRef.current.style.setProperty('--x', e.clientX - x);
    containerRef.current.style.setProperty('--y', e.clientY - y);
  }

  useEffect(() => {
    if (containerRef) {
      containerRef.current.addEventListener('mousemove', mouseMoveEvent);
    }

    return () =>
      containerRef.current.removeEventListener('mousemove', mouseMoveEvent);
  }, []);

  if (animation === 0) style = 'translateX(-100px)';
  else if (animation === 1) style = 'translateY(-100px)';
  else if (animation === 2) style = 'translateY(100px)';
  else style = 'translateX(100px)';

  return (
    <motion.div
      className='phone:max-w-[275px] phone:w-full phone:h-[475px] laptop:max-w-[240px] computer:max-w-[325px] computer:h-[525px] p-1 rounded-md domain'
      ref={animationRef}
      style={{
        transform: isInView ? 'none' : style,
        opacity: isInView ? 1 : 0,
        transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
      }}
    >
      <div
        className='w-full h-full px-4 py-7 computer:p-12 flex flex-col items-center gap-2 rounded-md shiny hover:cursor-none content'
        ref={containerRef}
      >
        <Image
          src={Domain.img}
          className='phone:w-[150px] phone:h-[150px] computer:w-[175px] computer:h-[175px]'
          alt=''
        />
        <h3 className='phone:text-[18px] laptop:text-[20px] computer:text-[22px] phone:mt-4 laptop:mt-2 font-black text-[#4d7ca8] text-center'>
          {Domain.title}
        </h3>
        <div className='phone:text-[16px] text-[#698097] phone:leading-[20px] computer:leading-[24px] mt-3 flex flex-col align-center justify-center gap-2 w-full'>
          {Domain.sections.map((section, i) => (
            <div className='flex align-center justify-start gap-5' key={i}>
              <Image
                src={section.Icon}
                alt=''
                className='w-[22px] h-[22px] my-auto'
              />
              <div>
                <p className='flex items-center'>{section.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default DomainItem;
