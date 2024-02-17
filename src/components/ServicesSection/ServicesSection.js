import ServiceItem from './ServiceItem';
import LineSeperator from '../UI/LineSeperator';

import Services from './Services';

const ServicesSection = () => {
  const service = Services[0];
  console.log(Services);
  return (
    <section className='flex flex-col items-center px-12'>
      <h2 className='text-[32px] mb-2'>Our Services</h2>
      <LineSeperator />
      <div className='flex flex-col px-12 py-8 bg-[#0d1c2b] gap-4 w-full mt-4'>
        <ServiceItem service={service} />
        <ServiceItem
          service={service}
                  />
        <ServiceItem
          service={service}
          location='right-[-200px] top-[350px] z-[7]'
        />
        <ServiceItem service={service} />
      </div>
    </section>
  );
};

export default ServicesSection;
