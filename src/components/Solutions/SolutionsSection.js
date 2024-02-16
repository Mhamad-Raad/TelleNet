import Image from 'next/image';
import Layer from '@/assets/layer.png';

import LineSeperator from '../UI/LineSeperator';

const SolutionsSection = () => {
  return (
    <section className='flex flex-col items-center px-16'>
      <h2 className="text-[32px]">Solutions</h2>
      <LineSeperator />
      <div className='p-2 w-full bg-gradient-to-r from-bgSecondary via-primary  to-bgSecondary mt-8 rounded-2xl'>
        <div className='bg-[#0a1622] rounded-lg p-4 flex flex-col gap-6 w-full'>
          <div className='flex gap-6'>
            <div className='bg-[#0d1c2b] px-8 py-4 flex flex-col items-center rounded-2xl w-1/2'>
              <Image src={Layer} alt='' className='h-1/2 w-full' />
              <h3 className='text-[28px] mt-5'>Title</h3>
              <p className='text-[20px] mt-5 text-center'>long text here</p>
            </div>
            <div className='bg-[#0d1c2b] px-8 py-4 flex flex-col items-center rounded-2xl w-1/2'>
              <Image src={Layer} alt='' className='h-1/2 w-full' />
              <h3 className='text-[28px] mt-5'>Title</h3>
              <p className='text-[20px] mt-5 text-center'>long text here</p>
            </div>
          </div>
          <div className='flex gap-6'>
            <div className='bg-[#0d1c2b] px-8 py-4 flex flex-col items-center rounded-2xl w-1/2'>
              <Image src={Layer} alt='' className='h-1/2 w-full' />
              <h3 className='text-[28px] mt-5'>Title</h3>
              <p className='text-[20px] mt-5 text-center'>long text here</p>
            </div>
            <div className='bg-[#0d1c2b] px-8 py-4 flex flex-col items-center rounded-2xl w-1/2'>
              <Image src={Layer} alt='' className='h-1/2 w-full' />
              <h3 className='text-[28px] mt-5'>Title</h3>
              <p className='text-[20px] mt-5 text-center'>long text here</p>
            </div>
          </div>
        
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
