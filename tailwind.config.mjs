/** @type {import('tailwindcss').Config} */
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
    },
  },
  plugins: [],
};
