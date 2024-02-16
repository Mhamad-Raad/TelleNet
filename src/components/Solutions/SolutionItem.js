import Image from 'next/image';

const SolutionItem = ({ solution }) => {
  return (
    <div className='bg-[#0d1c2b] phone:px-4 tablet:px-8 py-4 flex flex-col items-center rounded-2xl tablet:w-1/2'>
      <Image src={solution.image} alt='' className='phone:h-[40%] computer:h-1/2 phone:w-[80%] computer:w-full' />
      <h3 className='phone:text-[20px] laptop:text-[28px] computer:text-[32px] text-center phone:mt-2 tablet:mt-5'>{solution.title}</h3>
      <p className='phone:text-[16px] tablet:text-[18px] computer:text-[24px] phone:mt-2 tablet:mt-5 text-center'>{solution.description}</p>
    </div>
  );
};

export default SolutionItem;
