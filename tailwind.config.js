const colors = require('tailwindcss/colors')

module.exports = {
  darkMode: 'class',
  theme: {
    extend: {
      colors,
    },
    colors:{
        navy:{
          DEFAULT: "#202a33",
          lightest:"#BCBFC1",
          lighter:"#A5A9AD",
          light:"#8F9499",
          base:"#797F84",
          dark:"#626970",
          darker:"#4C545B",
          darkest:"#363F47"
        }
    }
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
      // border:['active']
    }
  },
  plugins: [],
  // xwind options
  xwind: {
    mode: 'objectstyles',
  },
}
