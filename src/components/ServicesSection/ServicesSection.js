'use client';



import ServiceList from './ServiceList';
import LineSeperator from '../UI/LineSeperator';

const ServicesSection = () => {


  return (
    <section className='flex flex-col items-center px-12'>
      <h2 className='text-[32px] mb-2'>Our Services</h2>
      <LineSeperator />
      <ServiceList />
    </section>
  );
};

export default ServicesSection;
