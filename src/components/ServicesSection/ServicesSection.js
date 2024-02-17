import LineSeperator from '../UI/LineSeperator';

import Services from './Services';

const ServicesSection = () => {
  console.log(Services);
  return (
    <section className='flex flex-col items-center px-12'>
      <h2 className='text-[32px] mb-2'>Our Services</h2>
      <LineSeperator />
      <div className='border w-[650px] h-[650px] rounded-full mt-10 relative flex items-center justify-center'>
        <div className='border w-[75%] h-[75%] rounded-full absolute' />
        <div className='border w-[50%] h-[50%] rounded-full absolute' />
      </div>
    </section>
  );
};

export default ServicesSection;
