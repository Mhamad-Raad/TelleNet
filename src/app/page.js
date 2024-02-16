import Hero from '../components/HeroSection/Hero';
import AboutSection from '@/components/AboutSection/AboutSection';
import ServicesSection from '@/components/DomainSection/DomainSection';
import ProductsSection from '@/components/ProductsSection/ProductsSection';
import SolutionsSection from '@/components/SolutionsSection/SolutionsSection';
import Contact from '@/components/ContactSection/ContactSection';

const Home = () => {
  return (
    <main className='flex flex-col gap-[100px] bg-bgColor'>
      <Hero />
      <AboutSection />
      <ServicesSection />
      <ProductsSection />
      <SolutionsSection />
      <Contact />
    </main>
  );
};

export default Home;
