const colors = require('tailwindcss/colors')

module.exports = {
  darkMode: 'class',
  theme: {
    extend: {
      colors,
    },
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
