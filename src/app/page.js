import AboutSection from '@/components/About/AboutSection';
import Hero from '../components/HeroSection/Hero';

const Home = () => {
  return (
    <main className='w-full h-[200vh] bg-bgColor'>
      <Hero />
      <AboutSection />
    </main>
  );
};

export default Home;
