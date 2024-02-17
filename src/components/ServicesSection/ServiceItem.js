'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

import { IoIosArrowForward } from 'react-icons/io';

const ServiceItem = ({ service }) => {
  const [hovered, isHovered] = useState(false);

  return (
    <motion.div
      className="bg-[#091420] phone:px-4 tablet:px-8 py-4 flex flex-col items-center rounded-2xl w-full min-h-[54px] h-[54px] overflow-hidden"
      onMouseOver={() => isHovered(true)}
      onMouseOut={() => isHovered(false)}
      whileHover={{
        height: 'auto',
      }}
      transition={{ ease: 'linear', duration: 0.3 }}
    >
      <div className='flex justify-between items-center text-[20px] w-full mb-4'>
        <h2>{service.title}</h2>
        <motion.div
          className='text-[28px]'
          style={{
            transform: hovered ? 'rotate(90deg)' : 'rotate(0deg)',
          }}
        >
          <IoIosArrowForward />
        </motion.div>
      </div>
      <p>{service.description}</p>
    </motion.div>
  );
};

export default ServiceItem;
