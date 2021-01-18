<template>
  <div
    id="main"
    class="h-screen overflow-hidden duration-500"
    :class="[
      { 'light lightMobile': items.mode == 'Light' },
      { 'dark darkMobile text-white textShadow': items.mode == 'Dark' }
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
/* Custom scrollbar */
::-webkit-scrollbar {
  width: 6px;
}
::-webkit-scrollbar-track {
  background: #7a7a7a;
}

::-webkit-scrollbar-thumb {
  background: rgb(75, 75, 75);
}

/* Desktop icon highlight */
.app-active-class,
.appClass:hover {
  background-color: rgba(165, 215, 238, 0.5);
  border: 1px solid rgba(165, 215, 238, 0.7);
}

/* Custom text shadow font */

.textShadow {
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.5), 0 1px 1px rgba(0, 0, 0, 0.5),
    0 1px 2px rgba(0, 0, 0, 0.75), 0 1px 2px rgba(0, 0, 0, 0.75), 0 1px 3px #000,
    0 1px 3px #000;
}

/* Wallpapers */
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
</style>
