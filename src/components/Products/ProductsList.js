'use client';

import { Element } from 'react-scroll';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import ProductsItem from './ProductsItem';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import Layers from '@/assets/layer.png';

const ProductsList = () => {
  return (
    <section className='phone:px-6 tablet:px-20 overflow-hidden'>
      <Element name='products' id='products' className='flex flex-col gap-20 items-center'>
        <div className='border border-[] w-[90%] h-[750px] p-12'>
          <h2 className="text-center">Product title</h2>
          <p className="">something long here</p>
          <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className='mySwiper'
        >
          <SwiperSlide>
            <div className="w-full">

            <ProductsItem
              ImageSrc={Layers}
              Title='Product 1'
              Description='Our innovative eGovernment Solutions can help you streamline
              identity management, unleash the potential of OCR technology, and
              enhance efficiency and security.'
              animation={3}
              />
              </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full">

            <ProductsItem
              ImageSrc={Layers}
              Title='Product 1'
              Description='Our innovative eGovernment Solutions can help you streamline
              identity management, unleash the potential of OCR technology, and
              enhance efficiency and security.'
              animation={3}
              />
              </div>
          </SwiperSlide>
        </Swiper>
        </div>
        
      </Element>
    </section>
  );
};

export default ProductsList;
