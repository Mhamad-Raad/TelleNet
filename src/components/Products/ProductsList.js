'use client';

import { Element } from 'react-scroll';

import ProductsItem from './ProductsItem';

import Layers from '@/assets/layer.png';

const ProductsList = () => {
  return (
    <section className='phone:px-6 tablet:px-20'>
      <Element name='products' id='products' className='flex flex-col gap-20'>
        <ProductsItem
          ImageSrc={Layers}
          Title='Product 1'
          Description='Our innovative eGovernment Solutions can help you streamline
            identity management, unleash the potential of OCR technology, and
            enhance efficiency and security.'
          animation={1}
        />
        <ProductsItem
          ImageSrc={Layers}
          Title='Product 1'
          Description='Our innovative eGovernment Solutions can help you streamline
            identity management, unleash the potential of OCR technology, and
            enhance efficiency and security.'
          animation={2}
        />
        <ProductsItem
          ImageSrc={Layers}
          Title='Product 1'
          Description='Our innovative eGovernment Solutions can help you streamline
            identity management, unleash the potential of OCR technology, and
            enhance efficiency and security.'
          animation={3}
        />
      </Element>
    </section>
  );
};

export default ProductsList;
