import Image from 'next/image';
import { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';

import './style.css';

const ServiceItem = ({ ImageSrc, Title, Description, animation }) => {
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

  if (animation === 1) style = 'translateX(-100px)';
  else if (animation === 2) style = 'translateY(-100px)';
  else style = 'translateX(100px)';

  return (
    <motion.div
      className='phone:max-w-[275px] computer:max-w-[400px] p-1 rounded-md service'
      ref={animationRef}
      style={{
        transform: isInView ? 'none' : style,
        opacity: isInView ? 1 : 0,
        transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
      }}
    >
      <div
        className='w-full h-full px-3 py-7 flex flex-col items-center gap-2 rounded-md shiny hover:cursor-none content'
        ref={containerRef}
      >
        <Image
          src={ImageSrc}
          className='phone:w-[150px] phone:h-[150px] computer:w-[175px] computer:h-[175px]'
          alt=''
        />
        <h3 className='phone:text-[18px] computer:text-[22px] mt-4 font-black text-[#4d7ca8] text-center'>
          {Title}
        </h3>
        <p className='phone:text-[16px] computer:text-[18px] text-center text-[#698097] phone:leading-[20px] computer:leading-[24px] computer:mt-4'>
          {Description}
        </p>
      </div>
    </motion.div>
  );
};

export default ServiceItem;
