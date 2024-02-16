import SolutionsList from './SolutionsList';
import LineSeperator from '../UI/LineSeperator';

const SolutionsSection = () => {
  return (
    <section className='flex flex-col items-center px-8'>
      <h2 className='text-[32px]'>Solutions</h2>
      <LineSeperator />
      <SolutionsList />
    </section>
  );
};

export default SolutionsSection;
