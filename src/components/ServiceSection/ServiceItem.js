import Image from 'next/image';
import Layer from '@/assets/layer.png';

import './ServiceItem.css'


const ServiceItem = () => {
  return (
    <div className='h-[200px] p-1 rounded-md bg-gradient-to-br from-primary from-30% via-textColor via-50%  to-primary to-75%'>
      <div className='w-full h-full p-2 flex flex-col gap-2 rounded-md bg-bgSecondary'>
        <Image src={Layer} className="img"/>
        <h3 className="text-[22px] font-black text-textColor text-center">Composability</h3>
        <p className="text-[18px] text-center text-textColor">
          NetSpot's solutions let you build a flexible and adaptable business with unmatched agility and efficiency.
        </p>
      </div>
    </div>
  );
};

export default ServiceItem;
