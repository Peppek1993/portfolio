// tailwind.config.js
module.exports = {
  purge: [
    './src/components/Programs.vue',
    './src/components/StartMenu.vue',
    './src/components/Taskbar.vue',
    './src/components/Window.vue',
    './src/components/Projects/LightningBet.vue',
    './src/components/Projects/Portfolio.vue',
    './src/components/Projects/WinePairing.vue',
    './src/components/Apps/About.vue',
    './src/components/Apps/Contact.vue',
    './src/components/Apps/Projects.vue',
    './src/components/Apps/Skills.vue'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {}
  },
  variants: {
    extend: {}
  },
  plugins: []
}
