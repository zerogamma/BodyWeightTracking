/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/infrastructure/ui/**/*.{js,ts,jsx,tsx}'], //"./src/**/*.{js,ts,jsx,tsx}",

  // Ensure these match with .storybook/preview.js
  theme: {
    screens: {
      xs: '375px',
      sm: '600px',
      md: '900px',
      lg: '1200px',
      xl: '1536px'
    }
  },
  plugins: []
};
