import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

import ProductsItem from './ProductsItem';

import 'swiper/css';
import 'swiper/css/pagination';

import './style.css';

const ProductsList = ({ product }) => {
  const animationRef = useRef();
  const isInView = useInView(animationRef, { once: true });

  return (
    <motion.div
      className='border bg-[#0a1622] w-full phone:p-4 laptop:p-12 laptop:pb-5 rounded-3xl border-bgSecondary'
      ref={animationRef}
      style={{
        opacity: isInView ? 1 : 0,
        transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
      }}
    >
      <h2 className='text-center text-[#5792fb] phone:text-[18px] laptop:text-[24px] computer:text-[28px] font-bold phone:mb-2 laptop:mb-5'>
        {product.title}
      </h2>
      <p className='text-center phone:text-[13px] laptop:text-[16px] computer:text-[22px] text-[#8ea7d3] mb-8'>
        {product.description}
      </p>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className='mySwiper'
      >
        {product.types.map((type, index) => {
          return (
            <SwiperSlide key={index}>
              <div className='w-full'>
                <ProductsItem
                  ImageSrc={type.image}
                  Title={type.title}
                  Description={type.description}
                  animation={5}
                />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </motion.div>
  );
};

export default ProductsList;
