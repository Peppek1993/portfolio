<template>
  <div class="h-screen home overflow-hidden">
    <app-programs></app-programs>
    <app-taskbar></app-taskbar>
    <app-desktop></app-desktop>
  </div>
</template>

<script>
import Taskbar from './components/Taskbar.vue'
import Programs from './components/Programs.vue'
import Desktop from './components/Desktop.vue'
import { mapGetters } from 'vuex'
export default {
  components: {
    appTaskbar: Taskbar,
    appPrograms: Programs,
    appDesktop: Desktop
  },
  computed: {
    ...mapGetters(['items'])
  }
}
</script>

<style>
/*.home {
  background-color: #070707;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23dfdfd6' fill-opacity='0.21'%3E%3Cpath d='M0 38.59l2.83-2.83 1.41 1.41L1.41 40H0v-1.41zM0 1.4l2.83 2.83 1.41-1.41L1.41 0H0v1.41zM38.59 40l-2.83-2.83 1.41-1.41L40 38.59V40h-1.41zM40 1.41l-2.83 2.83-1.41-1.41L38.59 0H40v1.41zM20 18.6l2.83-2.83 1.41 1.41L21.41 20l2.83 2.83-1.41 1.41L20 21.41l-2.83 2.83-1.41-1.41L18.59 20l-2.83-2.83 1.41-1.41L20 18.59z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}*/

.home {
  background-image: url('./assets/macOS-Catalina-Dark-Mode-wallpaper.jpg');
  background-size: cover;
}

head {
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
}
</style>
