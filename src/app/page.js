import Hero from '../components/HeroSection/Hero';
import AboutSection from '@/components/AboutSection/AboutSection';
import DomainSection from '@/components/DomainSection/DomainSection';
import ProductsSection from '@/components/ProductsSection/ProductsSection';
import SolutionsSection from '@/components/SolutionsSection/SolutionsSection';
import ServicesSection from '@/components/ServicesSection/ServicesSection';
import Contact from '@/components/ContactSection/ContactSection';

const Home = () => {
  return (
    <main className='flex flex-col gap-[100px] bg-bgColor'>
      <Hero />
      <AboutSection />
      <DomainSection />
      <ProductsSection />
      <SolutionsSection />
      <ServicesSection />
      <Contact />
    </main>
  );
};

export default Home;
