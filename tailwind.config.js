/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "linear-gradient(to right bottom,  rgb(46, 134, 193,.75),rgb(115, 53, 139,0.85), rgb(241, 196, 15,0.5)),  url('/assets/hero.jpg')",
        "hackathon-pattern": "linear-gradient(to right bottom,rgb(46, 134, 193,.6),rgb(115, 53, 139,0.8), rgb(241, 196, 15,0.5)),  url('/assets/hero-pattern.jpg')",
        "dlsprint-pattern": "linear-gradient(to right bottom,rgb(46, 134, 193,.85),rgb(115, 53, 139,0.96), rgb(241, 196, 15,0.7)),  url('/assets/dlsprint-hero.bmp')",
        "ai-contest-pattern": "linear-gradient(to right bottom,rgb(46, 134, 193,.8),rgb(115, 53, 139,0.9), rgb(241, 196, 15,0.5)),  url('/assets/ai-contest-hero.webp')",
        "ctf-pattern": "linear-gradient(to right bottom,rgb(46, 134, 193,.7),rgb(115, 53, 139,0.9), rgb(241, 196, 15,0.5)),  url('/assets/ctf-hero.jpg')",
        "gamejam-pattern": "linear-gradient(to right bottom,rgb(46, 134, 193,.6),rgb(115, 53, 139,0.7), rgb(241, 196, 15,0.5)),  url('/assets/gameJam-hero.webp')",


      },
      colors: {
        "color-primary": "var(--color-primary)",
        "color-secondary": "var(--color-secondary)",
        "color-tertiary": "var(--color-tertiary)",
        "color-white": "var(--color-white)",
        "color-black": "var(--color-black)",
        "color-gray": "var(--color-gray)",
      },

    },
  },
  plugins: [],
});
