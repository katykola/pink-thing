import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        accent: "var(--accent)",
        primaryDark: "var(--primary-dark)",
        dark: "var(--dark)",
      },
      fontFamily: {
        nunito: ['Nunito', 'sans-serif'],
        bebas: ['Bebas Neue', 'Oswald', 'Impact', 'sans-serif'],
        DMsans: ['DM Sans', 'sans-serif'],
      },
      maxWidth: {
        main: '85rem',
      },
     },
  },
  plugins: [],
} satisfies Config;
