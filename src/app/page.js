import Hero from '../components/HeroSection/Hero';
import AboutSection from '@/components/About/AboutSection';
import ServicesSection from '@/components/DomainSection/DomainSection';
import ProductsSection from '@/components/Products/ProductsSection';
import SolutionsSection from '@/components/Solutions/SolutionsSection';
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
