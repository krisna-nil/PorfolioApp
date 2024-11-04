/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {colors:{
      bgcolor:"#112240",
      primary:"#64FFDA",
      textcolor:"#8892AF"
    }},
    screens:{
      'xs':"476px",
      'sm':"640px",
      'md':"768px",
      'lg':"1024px",
      'xl':"1280px",
      '2xl-mx':{"max":"1535px"},
      'xl-mx':{"max":"1279px"},
      'lg-mx':{"max":"1023px"},
      'md-mx':{"max":"767px"},
      'sm-mx':{"max":"639px"},
      'xs-mx':{"max":"475px"},
    },
    
  },
  plugins: [],
}