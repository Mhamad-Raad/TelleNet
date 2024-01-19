import Image from 'next/image';
import { useRef, useEffect } from 'react';

import Layer from '@/assets/layer.png';

import './style.css';

const ServiceItem = () => {
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
    <div className='max-w-[275px] p-1 rounded-md bg-gradient-to-br from-bgSecondary from-30% via-primary via-50%  to-bgSecondary to-75% ease-in duration-200 transission-transform hover:scale-105'>
      <div
        className='w-full h-full px-3 py-7 flex flex-col items-center gap-2 rounded-md bg-bgColor shiny hover:cursor-none '
        ref={buttonRef}
      >
        <Image src={Layer} className='w-[150px] h-[150px]' alt='' />
        <h3 className='text-[18px] mt-4 font-black text-textColor text-center'>
          Composability
        </h3>
        <p className='text-[16px] text-center text-textColor leading-[20px]'>
          NetSpot's solutions let you build a flexible and adaptable business
          with unmatched agility and efficiency.
        </p>
      </div>
    </div>
  );
};

export default ServiceItem;
