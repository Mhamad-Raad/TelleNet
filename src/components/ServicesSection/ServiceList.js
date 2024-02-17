import ServiceItem from './ServiceItem';
import Services from './Services';

const ServiceList = () => {

  return (
    <div className='flex flex-col px-12 py-8 bg-[#0d1c2b] gap-4 w-full mt-4'>
      {
        Services.map((service,index) => <ServiceItem service={service} key={index} />)
      }
    </div>
  );
};

export default ServiceList;
