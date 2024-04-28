/** @type {import('tailwindcss').Config} */

const SIZES = {
  10: "10px",
  20: "20px",
  40: "40px",
  80: "80px",
};

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        blue: {
          DEFAULT: "#122D8B",
        },
        green: {
          DEFAULT: "#D6FA00",
        },
        orange: {
          DEFAULT: "#F57939",
        },
        white: {
          DEFAULT: "#E0E6E6",
        },
        grey: {
          DEFAULT: "#343437",
        },
        pink: {
          DEFAULT: "#FA676F",
        },
      },
      screens: {
        main: [{ raw: "(min-height: 500px) and (min-width: 1000px)" }],
      },
      padding: SIZES,
      margins: SIZES,
      gap: SIZES,
      fontFamily: {
        "io-regular": ["MD IO Regular"],
        "io-semibold": ["MD IO Semibold"],
        "io-bold": ["MD IO Bold"],
        "system-medium": ["MD System Medium"],
        "system-black": ["MD System Black"],
      },
    },
  },
  plugins: [],
};
