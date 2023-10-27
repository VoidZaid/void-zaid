/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html","./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
    extend: {
      height:{
         customMobile: 'calc(100vh - 48px)',
         customDesktop: 'calc(100vh - 48px)',
      }
    },
  },
  plugins: [],
}


