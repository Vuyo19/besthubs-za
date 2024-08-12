import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },  
      fontSize: {
        xs: ['12px', '16px'],
        sm: ['14px', '20px'],
        base: ['16px', '19.5px'],
        lg: ['18px', '21.94px'],
        xl: ['20px', '24.38px'],
        '2xl': ['24px', '29.26px'],
        '3xl': ['28px', '50px'],
        '4xl': ['48px', '58px'],
        '6xl': ['48px', '58px'],
        '7xl': ['58px', '68px'],
        '8xl': ['76px', '86px'],
        '10xl': ['96px', '106px']
  
      },
      fontFamily: {
        palanquin: ['Palanquin', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      colors: {
        'primary': "#ECEEFF",
        "coral-red": "#FF6452",
        "mystique-green": "#0F4B30",
        "amazon-green": "#3b7a57",
        "light-green": "#8fbc8f",
        "chique-green": "#3a6456",
        "french-bistre": "#856d4d",
        "faded-green": "#b6beb1",
        "royal-gold": "#B19767",
        "light-purple": "#ECEEFD",
        "dark-purple": "#8187B6",
        "gainsboro": "#f0efed",
        "slate-gray": "#E5E5E5",
        "dark-grey": "#a9a9a9",
        "pale-blue": "#F5F6FF",
        "rhythm-gray": "#777696",
        "white-400": "rgba(255, 255, 255, 0.80)"
      },  
      boxShadow: {
        '3xl': '0 10px 40px rgba(0, 0, 0, 0.1)'
      },
      screens: {
        "medi": "1200px"
      }

    },
  },
  plugins: [],
};
export default config;
