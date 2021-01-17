// tailwind.config.js
module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: {
        primary: '#3498dc'
      }
    }
  },
  variants: {
    extend: {
      borderWidth: ['hover'],
      width: ['hover']
    }
  },
  plugins: []
}
