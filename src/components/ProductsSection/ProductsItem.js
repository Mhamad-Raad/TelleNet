import Image from 'next/image';
import { motion } from 'framer-motion';

const ProductsItem = ({ ImageSrc, Title, Description }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    hover: {
      scale: 1.02,
      backgroundColor: '#102030',
      transition: { duration: 0.3 },
    },
  };

  const innerVariant = {
    hover: { scale: 1.1 },
  };

  return (
    <div className='p-1 rounded-md bg-gradient-to-br from-bgSecondary from-30% via-primary via-50% to-bgSecondary to-75% overflow-hidden laptop:h-[400px] mb-12'>
      <motion.div
        className='rounded-md flex phone:flex-col laptop:flex-row items-center justify-between phone:p-4 tablet:p-10 laptop:p-20 computer:p-20  phone:gap-8 transition-all duration-300 h-full'
        variants={containerVariants}
        initial='hidden'
        animate='visible'
        whileHover='hover'
      >
        <motion.div
          className='flex flex-col laptop:w-[60%]'
          variants={innerVariant}
          whileHover='hover'
          transition={{ duration: 0.3 }}
        >
          <h4 className='phone:text-[18px] tablet:text-[20px] phone:text-center laptop:text-left computer:text-[28px] phone:mb-1'>
            {Title}
          </h4>
          <p className='phone:text-[13px] tablet:text-[16px] phone:text-center laptop:text-left computer:text-[20px] text-[#7a92b1]'>
            {Description}
          </p>
        </motion.div>

        <motion.div
          variants={innerVariant}
          whileHover='hover'
          transition={{ duration: 0.3 }}
          className='phone:w-[75%] laptop:w-[30%] computer:w-[20%]'
        >
          <Image
            src={ImageSrc}
            alt=''
            className='h-full w-full max-h-[300px]'
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ProductsItem;
