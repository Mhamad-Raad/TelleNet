import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import ProductsItem from './ProductsItem';

import Products from './products';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import Layers from '@/assets/layer.png';

const ProductsList = () => {
  console.log(Products);
  return (
      Products.map((product, index) => {
        return (
          <div key={index} className='border border-[] w-[90%] h-[750px] p-12'>
            <h2 className='text-center'>{product.title}</h2>
            <p className='text-center'>{product.description}</p>
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
              {product.types.map((type, index) => {
                return (
                  <SwiperSlide key={index}>
                    <div className='w-full'>
                      <ProductsItem
                        ImageSrc={type.image}
                        Title={type.title}
                        Description={type.description}
                        animation={3}
                      />
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        );
      })
  );
};

export default ProductsList;
