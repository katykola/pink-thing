import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        primaryDark: "var(--primary-dark)",
        dark: "var(--dark)",
      },
      fontFamily: {
        nunito: ['Nunito', 'sans-serif'],
        bebas: ['Bebas Neue', 'cursive'],
        DMsans: ['DM Sans', 'sans-serif'],
      },
      maxWidth: {
        main: '85rem',
      },
     },
  },
  plugins: [],
} satisfies Config;
