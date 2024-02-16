import Image from 'next/image';

const SolutionItem = ({ solution }) => {
  return (
    <div className='bg-[#0d1c2b] px-8 py-4 flex flex-col items-center rounded-2xl w-1/2'>
      <Image src={solution.image} alt='' className='h-1/2 w-full' />
      <h3 className='text-[28px] mt-5'>{solution.title}</h3>
      <p className='text-[20px] mt-5 text-center'>{solution.description}</p>
    </div>
  );
};

export default SolutionItem;
