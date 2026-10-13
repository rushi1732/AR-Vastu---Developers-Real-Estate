/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0B0D0F",
        "background-secondary": "#15191D",
        "primary-text": "#F6F5F2",
        "metallic-silver": "#C9CDD2",
        "muted-text": "#A6ABB1",
        champagne: {
          DEFAULT: "#C7A979",
          hover: "#B89662",
          light: "#E3CCA7",
          dark: "#9E7B45",
          subtle: "rgba(199, 169, 121, 0.12)",
        },
        "light-surface": "#F7F6F2",
        border: "rgba(201, 205, 210, 0.14)",
        "border-champagne": "rgba(199, 169, 121, 0.28)",
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        sans: ["var(--font-manrope)", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "sans-serif"],
        marathi: ["var(--font-mukta)", "Noto Sans Devanagari", "sans-serif"],
      },
      boxShadow: {
        subtle: "0 4px 20px -2px rgba(0, 0, 0, 0.4)",
        metallic: "0 0 25px -5px rgba(201, 205, 210, 0.12)",
        champagne: "0 4px 25px -4px rgba(199, 169, 121, 0.2)",
      },
    },
  },
  plugins: [],
};
