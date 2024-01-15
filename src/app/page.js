import AboutSection from '@/components/About/AboutSection';
import Hero from '../components/HeroSection/Hero';

const Home = () => {
  return (
    <main className='flex flex-col gap-[100px] bg-bgColor'>
      <Hero />
      <AboutSection />
    </main>
  );
};

export default Home;
