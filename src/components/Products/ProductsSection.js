'use client';

import { Element } from 'react-scroll';

import ProductsList from './ProductsList';

const ProductsSection = () => {
  return (
    <section className='phone:px-6 tablet:px-20 overflow-hidden'>
      <Element
        name='products'
        id='products'
        className='flex flex-col gap-20 items-center'
      >
        <ProductsList />
      </Element>
    </section>
  );
};

export default ProductsSection;
