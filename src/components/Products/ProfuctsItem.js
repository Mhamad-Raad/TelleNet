import Image from 'next/image';
import { motion } from 'framer-motion';
import Layers from '@/assets/layer.png';
import './style.css';

const ProductsItem = () => {
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

  return (
    <div className='p-1 rounded-md bg-gradient-to-br from-bgSecondary from-30% via-primary via-50% to-bgSecondary to-75%'>
      <motion.div
        className='rounded-md flex phone:flex-col tablet:flex-row items-center justify-between phone:p-4 tablet:p-10 laptop:p-20 phone:gap-8 transition-all duration-300'
        variants={containerVariants}
        initial='hidden'
        animate='visible'
        whileHover='hover'
      >
        <div className='flex flex-col'>
          <h4 className='phone:text-[24px] tablet:text-[30px] computer:text-[38px] phone:mb-1'>
            Product 1
          </h4>
          <p className='phone:text-[14px] tablet:text-[16px] computer:text-[26px] phone:w-[100%] tablet:w-[90%] laptop:w-[75%] text-[#7a92b1]'>
            Our innovative eGovernment Solutions can help you streamline
            identity management, unleash the potential of OCR technology, and
            enhance efficiency and security.
          </p>
        </div>

        <motion.div
          variants={imageVariants}
          whileHover='hover'
          transition={{ duration: 0.3 }}
          className='phone:w-[75%] tablet:w-[33%]'
        >
          <Image src={Layers} alt='' />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ProductsItem;
