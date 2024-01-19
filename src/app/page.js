import Hero from '../components/HeroSection/Hero';
import AboutSection from '@/components/About/AboutSection';
import ServicesSection from '@/components/ServiceSection/ServicesSection';
import ProductsList from '@/components/Products/ProductsList';

const Home = () => {
  return (
    <main className='flex flex-col gap-[100px] bg-bgColor'>
      <Hero />
      <AboutSection />
      <ServicesSection />
      <ProductsList />
    </main>
  );
};

export default Home;
