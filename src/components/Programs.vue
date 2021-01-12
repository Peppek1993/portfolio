<template>
  <div class="p-2 select-none absolute">
    <div v-for="(app, index) in items.apps" :key="index" class="pb-24">
      <vue-draggable-resizable
        :handles="[]"
        class-name-active="app-active-class"
        :resizable="false"
        :w="80"
        :h="80"
      >
        <div
          class="appClass h-20"
          @click="
            openApp(app)
            app.minimized = false
          "
        >
          <i class="fas fa-3x px-4 pt-2 text-green-500" :class="app.icon"></i>
          <p class="text-center text-white font-light text-sm textShadow">
            {{ app.name }}
          </p>
        </div>
      </vue-draggable-resizable>
    </div>
    <div class="w-20 h-20 text-center" @click="switchMode">
      <i class="fas fa-lightbulb fa-3x text-blue-500 pt-4 text-center"></i>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['items'])
  },
  methods: {
    openApp(appName) {
      let apps = this.items.openedApps
      let uniqueApps = apps.filter(app => app.name == appName.name)
      console.log(uniqueApps)
      if (uniqueApps.length == 0) {
        apps.push(appName)
      }
      this.items.activeApp = appName.name
      if (screen.width < 767) {
        for (let i = 0; i < apps.length; i++) {
          apps[i].minW = screen.width - 40
        }
      }
      for (let i = 0; i < apps.length; i++) {
        apps[i].posX = screen.width / 2 - apps[i].minW / 2
        apps[i].posY = screen.height / 2 - apps[i].minH / 2 - screen.height / 11
      }
    },
    switchMode() {
      if (this.items.mode == 'light') {
        this.items.mode = 'dark'
      } else if (this.items.mode == 'dark') {
        this.items.mode = 'light'
      }
    }
  }
}
</script>
<style>
.app-active-class,
.appClass:hover {
  background-color: rgba(165, 215, 238, 0.5);
  border: 1px solid rgba(165, 215, 238, 0.7);
}

.textShadow {
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.5), 0 1px 1px rgba(0, 0, 0, 0.5),
    0 1px 2px rgba(0, 0, 0, 0.75), 0 1px 2px rgba(0, 0, 0, 0.75), 0 1px 3px #000,
    0 1px 3px #000;
}
</style>
