import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        customBlue: '#1219e4',
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
        mono: ['var(--font-roboto-mono)'],
        inter: [
          'inter',
          'sans'
        ],
        Bangers: [
          'Bangers'
        ],
        doubleXcomp: [
          'doubleXcomp'
        ],
        Oswald: [
          'oswald'
        ],
        Jersey25: [
          'Jersey25'
        ],
        // SpaceGrotesk: [
        //   'Space Grotesk',
        //   'sans-serif'
        // ],
        space: ['var(--font-space-grotesk)', 'sans-serif'],
        Gothic: [
          'Special Gothic Condensed One',
          'sans'
        ],
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
};
export default config;
