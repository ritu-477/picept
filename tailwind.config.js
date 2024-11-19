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
        'grey': "#BBBBBB",
        'gray-border': "#BBBBBB80",
        'light-black': "#201F20",
        'orange': "#EF5B24",
        'light-gray': "#424242",
        'dark-gray': "#121212",
        'primary-gray': "#252525",
        'border-primary-gray': "#BBBBBB4D",
        'light-orange': "#EF5B241A",
        'light-white': "#FFFFFF05",
        'transparent-black': "#BBBBBB05",
        'button-bg': "#2C2B2B",
        'choose-bg': "#161616",
        'transparent-gray': "#393939",
        'tab-button': "#4B4B4B",
        'border-transparent': "#505050",
      },

      fontSize: {
        'custom2xl': "22px",
        'custom3xl': "28px",
        'custom-7xl': "70px",
        'custom-5xl': "54px",
      },

      lineHeight: {
        'custom-lg': "22.4px",
        'custom-xl': "39.4px",
        'custom-5xl': "44.8px",
        'custom-6xl': "64.8px",
        'custom-7xl': "72px",
        'custom-8xl': "84px",
      },

      backgroundImage: {
        'hero': "url('./assets/images/webp/hero-bg.webp')",
        'requested': "url('./assets/images/webp/requested-bg.webp')",
        'trust': "url('./assets/images/webp/trusted-through-bg.webp')",
      },

      boxShadow: {
        'custom3xl': "0px_4px_4px_0px_#FFFFFF40",

      },
    },
  },
  plugins: [],
}

