import SolutionItem from './SolutionItem';
import Solutions from './Solutions'


const SolutionsList = () => {
  const item1 = Solutions[0];
  const item2 = Solutions[1];
  const item3 = Solutions[2];
  const item4 = Solutions[3];

  return (
    <div className='p-2 w-full bg-gradient-to-r from-bgSecondary via-primary  to-bgSecondary mt-8 rounded-2xl'>
      <div className='bg-[#0a1622] rounded-lg p-4 flex flex-col gap-6 w-full'>
        <div className='flex phone:flex-col tablet:flex-row gap-6'>
          <SolutionItem solution={item1} />
          <SolutionItem solution={item2} />
        </div>
        <div className='flex phone:flex-col tablet:flex-row gap-6'>
          <SolutionItem solution={item3} />
          <SolutionItem solution={item4} />
        </div>
      </div>
    </div>
  );
}

export default SolutionsList;