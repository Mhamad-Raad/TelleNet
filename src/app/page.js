import Hero from '../components/HeroSection/Hero';
import AboutSection from '@/components/About/AboutSection';
import ServicesSection from '@/components/DomainSection/DomainSection';
import ProductsSection from '@/components/Products/ProductsSection';
import Contact from '@/components/ContactSection/ContactSection';

const Home = () => {
  return (
    <main className='flex flex-col gap-[100px] bg-bgColor'>
      <Hero />
      <AboutSection />
      <ServicesSection />
      <ProductsSection />
      <Contact />
    </main>
  );
};

export default Home;
