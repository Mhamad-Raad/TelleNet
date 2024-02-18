'use client';

import { Element } from 'react-scroll';

import SolutionsList from './SolutionsList';
import LineSeperator from '../UI/LineSeperator';

const SolutionsSection = () => {

  return (
    <section className='flex flex-col items-center phone:px-4 laptop:px-8 computer:px-10 overflow-hidden'>
      <Element name='solution' id='solution'>
      <h2 className='text-[36px] mb-2'>Solutions</h2>
      <LineSeperator />
      <SolutionsList />
      </Element>
    </section>
  );
};

export default SolutionsSection;
