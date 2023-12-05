/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
      extend: {},
    },
    plugins: [require("daisyui")],
    daisyui: {
        themes: [
          {
            mytheme: {
              "primary": "#a991f7",
              "secondary": "#f6d860",
              "accent": "#37cdbe",
              "neutral": "#3d4451",
              "base-100": "#111111",
              "base-content": "#EEEEE1",
            },
          },
          "dark",
          "cupcake",
        ],
      },
};