/** @type {import('tailwindcss').Config} */

const SIZES = {
  10: "10px",
  20: "20px",
  40: "40px",
  80: "80px",
  200: "200px",
};

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  safelist: [
    {
      pattern: /bg-(green|blue|grey|orange)/,
    },
    {
      pattern: /w-(small|big)/,
    },
    {
      pattern: /h-(small|big)/,
    },
    {
      pattern: /min-w-(small|big)/,
    },
  ],
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
      margin: SIZES,
      gap: SIZES,
      inset: SIZES,
      width: {
        small: "90px",
        big: "130px",
      },
      height: {
        small: "90px",
        big: "130px",
      },
      minWidth: {
        small: "90px",
        big: "130px",
      },
      fontFamily: {
        "io-thin": ["MD IO thin"],
        "io-regular": ["MD IO Regular"],
        "io-semibold": ["MD IO Semibold"],
        "io-bold": ["MD IO Bold"],
        "system-medium": ["MD System Medium"],
        "system-black": ["MD System Black"],
      },
      animation: {
        "spin-slow": "spin 5s linear infinite",
        "spin-reverse": "spin 10s reverse linear infinite",
      },
    },
  },
  plugins: [],
};
