/** @type {import('tailwindcss').Config} */
export default {
  content:[
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:"#ff4800",
      },
      screens: {
        'sm': {'min': '300px', 'max': '639px'},
        // => @media (min-width: 300px) and (max-width: 639px) { ... }
      
        'md': {'min': '640px', 'max': '767px'},
        // => @media (min-width: 640px) and (max-width: 767px) { ... }
      
        'lg': {'min': '768px', 'max': '1023px'},
        // => @media (min-width: 768px) and (max-width: 1023px) { ... }
      
        'xl': {'min': '1024px', 'max': '1279px'},
        // => @media (min-width: 1024px) and (max-width: 1279px) { ... }
        
        '2xl': {'min': '1280px', 'max': '3000px'}
        // => @media (min-width: 1280px) and (max-width: 1535px) { ... }

     
      }
    },
  },
  plugins: [],
}

