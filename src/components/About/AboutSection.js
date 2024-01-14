'use client';
import { useState } from 'react';

import LineSeperator from '.././UI/LineSeperator';
import Globe from '../UI/Globe';

const AboutSection = () => {
  const [showText, setShowText] = useState(false);

  const toggleShow = () => {
    setShowText(!showText);
  };

  const aboutText = `is guided by four principles: customer obsession rather than competitor
        focus, passion for invention, commitment to operational excellence, and
        long-term thinking. We are driven by the excitement of building
        technologies, inventing products, and providing services that change
        lives. We embrace new ways of doing things, make decisions quickly, and
        are not afraid to fail. We have the scope and capabilities of a large
        company, and the spirit and heart of a small one.`;

  return (
    <section className='flex flex-col gap-[10px] items-center'>
      <h2 className='text-textColor text-[28px] font-black'>Get to Know Us</h2>
      {/* write me a short paragraph */}
      <LineSeperator />
      <p className='text-center mt-10 px-10'>
        NetSpot provides cutting-edge technology solutions tailored to your
        business needs, From cybersecurity to software development, trust our
        experts to enhance your digital world.
      </p>
      <Globe />
      <p className='text-center mt-10 px-10'>
        <span className='font-bold'>
          TelleNet<sub>Pro</sub>
        </span>{' '}
        {showText ? aboutText : aboutText.slice(0, 300)}
      </p>
      <button
        onClick={toggleShow}
        className='text-textColor text-[18px] font-bold hover:underline'
      >
        {showText ? 'Show Less' : 'Show More'}
      </button>
    </section>
  );
};

export default AboutSection;
