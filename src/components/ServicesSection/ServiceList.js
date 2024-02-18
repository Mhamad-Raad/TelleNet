import ServiceItem from './ServiceItem';
import Services from './Services';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const ServiceList = () => {
  const ref = useRef();
  const isInView = useInView(ref, {once: true});
  return (
    <div
      className='flex flex-col px-12 py-8 bg-[#0d1c2b] gap-4 w-full mt-4'
      ref={ref}
    >
      {Services.map((service, index) => (
        <ServiceItem
          service={service}
          key={index}
          isInView={isInView}
          delay={index * 0.3}
        />
      ))}
    </div>
  );
};

export default ServiceList;
