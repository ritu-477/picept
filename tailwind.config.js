/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "20px",
        screens: {
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1180px",
        },
      },
      fontFamily: {
        'space': "'space grotesk', sans-serif",
      },
      colors: {
        'ink-black': "#0D0D0D",
        'primary-white': "#ECECEC",
        'grey': '#BBBBBB',
        'gray-border': '#BBBBBB80',
        'light-black': "#201F20", 
        'orange': "#EF5B24",

        // 'primary-gray': "#d9d9d9",
        // 'dark-gray': "#636363",
        // 'navy-blue': "#7575751A",
        // 'btn-bg': '#2A70F429',
        // 'ink-blue': '#2a70f4',
        // 'light-gray': '#9a999f',
        // 'dark-blue': '#085bf7',
        // 'gray': '#8a8f97',
        // 'charcoal-black': '#0F0E18',
        // 'off-white': '#FFFFFF1A',
        // 'circle-border': '#3D3B45',
      },
      fontSize: {
        'custom2xl': "22px",
        'custom-7xl': "70px",
        // 'custom3xl': "26px",
        // 'custom4xl': "42px",
        // 'custom5xl': "64px",
        // 'custom6xl': "66px",
        // 'custom7xl': "85px",
      },
      lineHeight: {
        // 'custom-base': "19.2px",
        'custom-lg': "22.4px",
        'custom-8xl': "84px",
        // 'custom-7xl': "70px",
        // 'custom-xl': "25.2px",
        // 'custom-5xl': "58.8px",
        // 'custom-6xl': "63.6px",
        // 'custom-7xl': "79.2px",
        // 'custom-9xl': "102px",
      },
      backgroundImage: {
        'hero': "url('./assets/images/webp/hero-bg.webp')",
      },
    },
  },
  plugins: [],
}

