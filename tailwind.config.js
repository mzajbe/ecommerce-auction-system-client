/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content(), ],
  theme: {
    extend: {
      animation: {
        blink: "blink 1s infinite",
      },
      keyframes: {
        blink: {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0 },
        },
      },
    },
  },
  plugins: [require("daisyui"), flowbite.plugin(),],

  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },
};

// module.exports = {
//   //...
//   plugins: [
//     require('daisyui'),
//   ],
// }
