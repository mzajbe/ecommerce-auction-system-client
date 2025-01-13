// tailwind.config.js (or .ts if you're using TypeScript)
import flowbite from 'flowbite';
// import flowbiteReact from 'flowbite-react/tailwind';  // Ensure you import correctly

export default {
  content: [
    "./index.html", 
    "./src/**/*.{js,ts,jsx,tsx}", 
    // flowbite.content(), 
    // flowbiteReact.content(),
  ],
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
  plugins: [
    // require("daisyui"), 
    // flowbite.plugin()
  ],
  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },
};
