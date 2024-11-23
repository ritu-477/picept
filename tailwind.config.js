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
        'light-orange': "#281914  ",
        'light-white': "#FFFFFF05",
        'transparent-black': "#BBBBBB05", 
        'button-bg': "#2C2B2B", 
        'choose-bg': "#161616",
        'transparent-gray': "#393939",
        'tab-button': "#4B4B4B",
        'border-transparent': "#505050",
        'green': "#46EF24",
        'midnight-black': "#292828", 
        'border-midnight': "#555554",
        'charcoal-black': "#171616",
        'charcoal-gray': "#575757",
        'jet-black': "#232323", 
        'semi-transparent': "#FFFFFF1F",
        'semi-transparent-gray': "#ECECEC3D",
        'semi-transparent-white': "#fafafa",
        'vivid-green': "#24D830", 
        'vivid-green-transparent': "#24D8303D",

      },

      fontSize: {
        'custom2xl': "22px",
        'custom3xl': "28px",
        'custom-4xl': "32px",
        'custom-7xl': "70px",
        'custom-5xl': "54px",
      },

      lineHeight: {
        'custom-lg': "22.4px",
        'custom-xl': "39.4px",
        'custom-4xl': "44.8px",
        'custom-5xl': "50.4px",
        'custom-6xl': "64.8px",
        'custom-7xl': "72px",
        'custom-8xl': "84px",
      },

      backgroundImage: {
        'hero': "url('./assets/images/webp/hero-bg.webp')",
        'requested': "url('./assets/images/webp/requested-bg.webp')",
        'trust': "url('./assets/images/webp/trusted-through-bg.webp')",
        'unmatched': "url('./assets/images/webp/unmatched-bg.webp')",
        'trust': "url('./assets/images/webp/ai-trust-bg.webp')",
        'delivers': "url('./assets/images/webp/delivers-bg.webp')",
      },

      boxShadow: {
        'custom3xl': "0px_4px_4px_0px_#FFFFFF40",
        'custom4xl': "0px_11px_30px_0px_#0000004F", 
        'custom5xl': "0px_11px_30px_0px_#0000003D", 

      },
    },
  },
  plugins: [],
}

