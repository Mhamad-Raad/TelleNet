'use client';

import { useState } from 'react';

import { IoIosArrowForward } from 'react-icons/io';

const ServiceItem = ({ service }) => {
  const [hovered, isHovered] = useState(false);

  return (
    <div
      className='bg-[#091420] phone:px-4 tablet:px-8 py-4 flex flex-col items-center rounded-2xl w-full max-h-[54px] overflow-hidden hover:cursor-pointer hover:bg-[#000c1b] transition-all duration-100 ease-in-out'
      onClick={() => isHovered(!hovered)}
      transition={{ ease: 'linear', duration: 0.3 }}
      style={{
        transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s',
        maxHeight: hovered ? '250px' : '54px',
      }}
    >
      <div className='flex justify-between items-center text-[20px] w-full mb-4'>
        <h2 className='phone:text-[12px] tablet:text-[16px] laptop:text-[20px]'>
          {service.title}
        </h2>
        <div
          className='phone:text-[20px] tablet:text-[24px] laptop:text-[28px] text-[white]'
          style={{
            transform: hovered ? 'rotate(90deg)' : 'rotate(0deg)',
          }}
        >
          <IoIosArrowForward />
        </div>
      </div>
      <p className='phone:text-[12px] tablet:text-[14px] laptop:text-[16px] terxt-left'>
        {service.description}
      </p>
    </div>
  );
};

export default ServiceItem;
