'use client';

import { Element } from 'react-scroll';

import ProductsList from './ProductsList';
import Products from './products';

const ProductsSection = () => {
  return (
    <section className='phone:px-4 tablet:px-8 overflow-hidden'>
      <Element
        name='products'
        id='products'
        className='flex flex-col gap-20 items-center'
      >
        {
          Products.map((product, index) => <ProductsList product={product} key={index} />)
        }
      </Element>
    </section>
  );
};

export default ProductsSection;
