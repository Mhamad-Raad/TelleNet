import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

import ProductsItem from './ProductsItem';

import Products from './products';

import 'swiper/css';
import 'swiper/css/pagination';

import './style.css';

const ProductsList = () => {
  console.log(Products);
  return Products.map((product, index) => {
    return (
      <div
        key={index}
        className='border bg-[#0a1622] w-full phone:p-4 laptop:p-12 laptop:pb-5 rounded-3xl border-bgSecondary'
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
            delay: 5500,
            disableOnInteraction: false,
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
      </div>
    );
  });
};

export default ProductsList;
