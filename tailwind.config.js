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
    colors: {
      'Green': '#64ffda',
      'Navy': '#0a192f',
      'Lightnavy': '#112240',
      'Lightest Navy': '#233554',
      'Slate': '#8892b0',
      'Light Slate': '#a8b2d1',
      'Lightest Slate': '#ccd6f6',
      'White': '#e6f1ff',
    },
    fontFamily: {
      'firacode': Fira_Code
    }
  },
  plugins: [],
};
