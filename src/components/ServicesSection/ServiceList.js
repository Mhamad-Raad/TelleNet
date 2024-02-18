import ServiceItem from './ServiceItem';
import Services from './Services';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const ServiceList = () => {
  const ref = useRef();
  const isInView = useInView(ref);
  return (
    <div
      className='flex flex-col phone:px-3 laptop:px-12 py-8 bg-[#0d1c2b] gap-4 w-full mt-4'
      ref={ref}
    >
      {Services.map((service, index) => (
        <motion.div
          style={{
            opacity: isInView ? 1 : 0,
            transform: isInView ? 'none' : 'translateY(100px)',
            transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s',
            transitionDelay: `${index * 0.2}s`
          }}
        >
          <ServiceItem
            service={service}
            key={index}
            isInView={isInView}
            delay={index * 0.3}
            />
        </motion.div>
      ))}
    </div>
  );
};

export default ServiceList;
