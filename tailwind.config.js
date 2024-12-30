/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT")
module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/preline/dist/*.js'
  ],
  theme: {
    extend: {
      fontFamily:{
        regular:['Amen']
      }
    },
  },
  plugins: [
    require('preline/plugin'),
    
  ],
  variants: {
    extend: {
      display: ["group-hover"],
    },
  },
});

