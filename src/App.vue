<template>
  <div class="h-screen home overflow-hidden">
    <app-programs></app-programs>
    <app-taskbar></app-taskbar>
    <app-window></app-window>
  </div>
</template>

<script>
import Taskbar from './components/Taskbar.vue'
import Programs from './components/Programs.vue'
import Window from './components/Window.vue'
import { mapGetters } from 'vuex'
export default {
  components: {
    appTaskbar: Taskbar,
    appPrograms: Programs,
    appWindow: Window
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
.home {
  background-image: url('./assets/macOS-Catalina-Dark-Mode-wallpaper.jpg');
  background-size: cover;
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
</style>
