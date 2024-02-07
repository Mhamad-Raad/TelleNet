'use client';

import { Element } from 'react-scroll';

import DomainItem from './DomainItem';
import LineSeperator from '../UI/LineSeperator';

import Layer from '@/assets/layer.png';

const AboutSection = () => {
  return (
    <section className='w-full overflow-hidden'>
      <Element name='domains' id='domains' className='flex flex-col gap-[10px]'>
        <h2 className='text-textColor text-[28px] font-black text-center'>
          How Can We Help
        </h2>
        <LineSeperator />
        <div className='flex flex-wrap items-center justify-center gap-10 mt-16 phone:px-4'>
          <DomainItem
            ImageSrc={Layer}
            Title='Composition'
            Description="NetSpot's solutions let you build a flexible and adaptable business
          with unmatched agility and efficiency."
            animation={1}
          />
          <DomainItem
            ImageSrc={Layer}
            Title='Composition'
            Description="NetSpot's solutions let you build a flexible and adaptable business
          with unmatched agility and efficiency."
            animation={2}
          />
          <DomainItem
            ImageSrc={Layer}
            Title='Composition'
            Description="NetSpot's solutions let you build a flexible and adaptable business
          with unmatched agility and efficiency."
            animation={3}
          />
        </div>
      </Element>
    </section>
  );
};

export default AboutSection;
