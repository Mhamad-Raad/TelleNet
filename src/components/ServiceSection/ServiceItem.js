import Image from 'next/image';
import Layer from '@/assets/layer.png';

const ServiceItem = () => {
  return (
    <div className='max-w-[275px] p-1 rounded-md bg-gradient-to-br from-bgSecondary from-30% via-primary via-50%  to-bgSecondary to-75%'>
      <div className='w-full h-full px-3 py-7 flex flex-col items-center gap-2 rounded-md bg-bgColor'>
        <Image src={Layer} className="w-[150px] h-[150px]"/>
        <h3 className="text-[18px] mt-4 font-black text-textColor text-center">Composability</h3>
        <p className="text-[16px] text-center text-textColor leading-[20px]">
          NetSpot's solutions let you build a flexible and adaptable business with unmatched agility and efficiency.
        </p>
      </div>
    </div>
  );
};

export default ServiceItem;
