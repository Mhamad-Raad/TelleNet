/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    screens: {
      phone: '275px',
      tablet: '768px',
      laptop: '1024px',
      computer: '1440px',
    },
    colors: {
      bgColor: '#0d1115',
      bgSecondary: '#102030',
      primary: '#063868',
      secondary: '#84c0df',
      textColor: '#ffffff',
    },
  },
};
