// tailwind.config.js
module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        light: "url('./assets/light_wallpaper.jpg')",
        dark: "url('./assets/dark_wallpaper.jpg')"
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
