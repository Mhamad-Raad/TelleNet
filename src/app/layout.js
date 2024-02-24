import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';

import './globals.css';

export const metadata = {
  title: 'TeleNet Pro',
  description: `Discover unparalleled network solutions with TelenetPro. Specializing in bespoke networking services, we offer tailored solutions for businesses seeking reliability, security, and performance. Explore our portfolio for cutting-edge infrastructure designs, seamless implementations, and proactive support. Partner with us to elevate your network capabilities and propel your business forward in today's digital landscape.`,
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <head>
        <link rel="icon" href="/icon.png" />
      </head>
      <body className='bg-bgColor text-textColor'>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
