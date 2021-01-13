<template>
  <div
    class="h-screen overflow-hidden"
    :class="[
      { 'light lightMobile': items.mode == 'light' },
      { 'dark darkMobile text-white textShadow': items.mode == 'dark' }
    ]"
  >
    <app-programs></app-programs>
    <app-taskbar></app-taskbar>
    <app-window></app-window>
    <app-start-menu></app-start-menu>
  </div>
</template>

<script>
import Taskbar from './components/Taskbar.vue'
import Programs from './components/Programs.vue'
import Window from './components/Window.vue'
import StartMenu from './components/StartMenu.vue'
import { mapGetters } from 'vuex'
export default {
  components: {
    appTaskbar: Taskbar,
    appPrograms: Programs,
    appWindow: Window,
    appStartMenu: StartMenu
  },
  computed: {
    ...mapGetters(['items'])
  }
}
</script>

<style>
::-webkit-scrollbar {
  width: 6px;
}
::-webkit-scrollbar-track {
  background: #7a7a7a;
}

::-webkit-scrollbar-thumb {
  background: rgb(75, 75, 75);
}
.light {
  background: url('./assets/light_wallpaper.jpg') no-repeat center center fixed
    #000;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}

.dark {
  background: url('./assets/dark_wallpaper.jpg') no-repeat center center fixed
    #000;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}

@media (max-width: 768px) {
  .darkMobile {
    background: url('./assets/dark_mobile.jpg') no-repeat center center fixed
      #000;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
  }
  .lightMobile {
    background: url('./assets/light_mobile.jpg') no-repeat center center fixed
      #000;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
  }
}

@import url('https://rsms.me/inter/inter.css');
html {
  font-family: 'Inter', sans-serif;
}
@supports (font-variation-settings: normal) {
  html {
    font-family: 'Inter var', sans-serif;
  }
}

head {
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
}

body {
  overflow: hidden;
}
</style>
