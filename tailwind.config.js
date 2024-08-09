// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens:{
      xxl: { max: '1440px'},
      xl: { max: '1280px' },    
      lxl: { max: '1100px' },    
      lg: { max: '1024px' },
      md: { max: '960px' },
      lmd: { max: '850px' },
      sm: { max: '720px' },
      xsm: { max: '650px' },
      xs: { max: '440px' },
    },

    extend: {},
  },
  plugins: [],
}