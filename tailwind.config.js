/** @type {import('tailwindcss').Config} */
import { Fira_Code } from 'next/font/google';
module.exports = {
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
    },
    filter: {
      'halcyon': 'contrast(1.2) brightness(0.9) hue-rotate(-10deg) saturate(1.1)',
    },
    colors: {
      'Green': '#6A92FF',
      'Navy': '#0a192f',
      'Lightnavy': '#112240',
      'LightestNavy': '#233554',
      'Slate': '#8892b0',
      'LightSlate': '#a8b2d1',
      'LightestSlate': '#ccd6f6',
      'White': '#e6f1ff',
    },
    fontFamily: {
      'firacode': Fira_Code
    },
    boxShadow: {
      'HoverBtns': '3px 3px 0 0',
    },
    dropShadow: {
      'HoverLogo': '3px 3px 0  #6A92FF',

    },

    keyframes: {
      underline: {
        '0%, 100%': { transform: '' },
        '50%': { transform: 'rotate(3deg)' },
      }
    }
  },
  plugins: [],
};
