import Image from 'next/image';
import { useRef, useEffect } from 'react';

import './style.css';

const ServiceItem = ({ ImageSrc, Title, Description }) => {
  const buttonRef = useRef(null);

  function mouseMoveEvent(e) {
    const { x, y } = buttonRef.current.getBoundingClientRect();
    buttonRef.current.style.setProperty('--x', e.clientX - x);
    buttonRef.current.style.setProperty('--y', e.clientY - y);
  }

  useEffect(() => {
    if (buttonRef) {
      buttonRef.current.addEventListener('mousemove', mouseMoveEvent);
    }

    return () =>
      buttonRef.current.removeEventListener('mousemove', mouseMoveEvent);
  }, [buttonRef]);

  return (
    <div className='phone:max-w-[275px] computer:max-w-[400px] p-1 rounded-md bg-gradient-to-br from-bgSecondary from-30% via-primary via-50%  to-bgSecondary to-75% ease-in duration-200 transission-transform hover:scale-105'>
      <div
        className='w-full h-full px-3 py-7 flex flex-col items-center gap-2 rounded-md bg-bgColor shiny hover:cursor-none'
        ref={buttonRef}
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
    </div>
  );
};

export default ServiceItem;
