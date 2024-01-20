import Image from 'next/image';

import Layers from '@/assets/layer.png';

const ProductsItem = () => {
  return (
    <div className='p-1 rounded-md bg-gradient-to-br from-bgSecondary from-30% via-primary via-50%  to-bgSecondary to-75% ease-in duration-200 transission-transform hover:scale-105'>
      <div className='bg-bgColor rounded-md flex phone:flex-col tablet:flex-row items-center justify-between phone:p-4 tablet:p-10 laptop:p-20 phone:gap-8'>
        <div className='flex flex-col'>
          <h4 className='phone:text-[24px] tablet:text-[30px] phone:mb-1'>Product 1</h4>
          <p className='phone:text-[14px] tablet:text-[16px] phone:w-[100%] tablet:w-[90%] laptop:w-[75%] text-[#7a92b1]'>
            our innovative eGovernment Solutions can help you streamline
            identity management, unleash the potential of OCR technology, and
            enhance efficiency and security.
          </p>
        </div>

        <Image src={Layers} alt='' className='phone:w-[75%] tablet:w-[33%]' />
      </div>
    </div>
  );
};

export default ProductsItem;
