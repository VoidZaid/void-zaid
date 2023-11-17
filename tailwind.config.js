/** @type {import('tailwindcss').Config} */
export default {
   content: ["./index.html","./src/**/*.{js,jsx,ts,tsx}"],
   theme: {
      extend: {
         fontFamily:{
            openSans: ['Open Sans', 'sans-serif'],
            vinaSans:['Vina Sans', 'sans-serif'],
            rubikMono:['Rubik Mono One', 'monospace'],
         },
         height:{
            customMobile: 'calc(100vh - 48px)',
            customDesktop: 'calc(100vh - 48px)',
         },
         keyframes:{
            glowing:{
               '0%':{'background-position': '0 0'},
               '50%':{'background-position': '400% 0'},
               '100%':{'background-position': '0 0'},
            }
         },
         animation:{
            glowing: 'glowing 2s linear infinite'
         },
         backgroundImage:{
            radialGradient: 'radial-gradient(circle, var(--tw-gradient-stops))'
         }
      },
   plugins: [],
   }

}
