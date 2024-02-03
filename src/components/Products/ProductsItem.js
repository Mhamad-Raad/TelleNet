import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const ProductsItem = ({ ImageSrc, Title, Description, animation }) => {
  const ref = useRef();
  const isInView = useInView(ref, {once: true});

  let style = '';
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    hover: {
      scale: 1.02,
      backgroundColor: '#102030',
      transition: { duration: 0.3 },
    },
  };

  const imageVariants = {
    hover: { scale: 1.1 },
  };

  if (animation === 1) style = '100%';
  else if (animation === 2) style = '1';

  return (
    <motion.div
      className='p-1 rounded-md bg-gradient-to-br from-bgSecondary from-30% via-primary via-50% to-bgSecondary to-75% overflow-hidden'
      style={{
        width: animation === 1 ? (isInView ? style : '75%') : '100%',
        scale: animation === 2 ? (isInView ? style : '0') : '1',
        opacity: isInView ? 1 : 0,
        transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
      }}
      ref={ref}
    >
      <motion.div
        className='rounded-md flex phone:flex-col tablet:flex-row items-center justify-between phone:p-4 tablet:p-10 laptop:p-20 phone:gap-8 transition-all duration-300'
        variants={containerVariants}
        initial='hidden'
        animate='visible'
        whileHover='hover'
      >
        <div className='flex flex-col'>
          <h4 className='phone:text-[24px] tablet:text-[30px] computer:text-[38px] phone:mb-1'>
            {Title}
          </h4>
          <p className='phone:text-[14px] tablet:text-[16px] computer:text-[26px] phone:w-[100%] tablet:w-[90%] laptop:w-[75%] text-[#7a92b1]'>
            {Description}
          </p>
        </div>

        <motion.div
          variants={imageVariants}
          whileHover='hover'
          transition={{ duration: 0.3 }}
          className='phone:w-[75%] tablet:w-[33%]'
        >
          <Image src={ImageSrc} alt='' />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default ProductsItem;
