/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        primary: ["Sporting Grotesque", "sans-serif"],
      },
      colors: {
        primary: {
          DEFAULT: '#10B981', // A vibrant green
          dark: '#059669',
        },
        dark: '#121212', // A very dark gray, almost black
        light: '#F9FAFB', // Off-white for light mode backgrounds
        "gray-dark": '#1E1E1E', // Darker gray for cards/sections
        "gray-light": '#333333', // Lighter gray for borders/text
      },
      container: {
        center: true,
        padding: "1rem",
        screens: {
          // sm: "640px",
          // md: "768px",
          // lg: "1024px",
          xl: "1280px",
          "2xl": "1446px",
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
export default config;
