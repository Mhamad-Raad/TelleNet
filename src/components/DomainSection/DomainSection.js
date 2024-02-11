'use client';

import { Element } from 'react-scroll';

import DomainItem from './DomainItem';
import LineSeperator from '../UI/LineSeperator';

import Domains from './Domains';

const DomainSection = () => {
  return (
    <section className='w-full overflow-hidden'>
      <Element name='domains' id='domains' className='flex flex-col gap-[10px]'>
        <h2 className='text-textColor text-[28px] font-black text-center'>
          How Can We Help
        </h2>
        <LineSeperator />
        <div className='flex flex-wrap phone:items-center phone:justify-center laptop:justify-between phone:gap-10 laptop:gap-0 mt-14 phone:px-2'>
          {Domains.map((domain, i) => (
            <DomainItem
              key={i}
              Domain={domain}
              Description="NetSpot's solutions let you build a flexible and adaptable business"
            />
          ))}
        </div>
      </Element>
    </section>
  );
};

export default DomainSection;
