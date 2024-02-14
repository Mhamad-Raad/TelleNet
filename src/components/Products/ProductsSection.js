'use client';

import { Element } from 'react-scroll';

import ProductsList from './ProductsList';

const ProductsSection = () => {
  return (
    <section className='phone:px-4 tablet:px-8 overflow-hidden'>
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
