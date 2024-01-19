'use client';

import { Element } from 'react-scroll';

import ProductsItem from './ProfuctsItem';

const ProductsList = () => {
  return (
    <section className=''>
      <Element name='products' id='products'>
        <ProductsItem />
      </Element>
    </section>
  );
};

export default ProductsList;
