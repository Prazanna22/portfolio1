/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      boxShadow: {
        'custom': 'rgba(43, 43, 64, 0.12) 0px 2px 4px 0px, rgba(43, 43, 64, 0.32) 0px 2px 16px 0px',
      },
      boxShadow: {
        'custom-white': 'rgba(255, 255, 255, 0.12) 0px 2px 4px 0px, rgba(255, 255, 255, 0.32) 0px 2px 16px 0px',
      },
    },
  },
  plugins: [],
}

