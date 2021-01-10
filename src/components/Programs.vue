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
      apps.push(appName)
      apps = [...new Set(apps)]
      this.items.activeApp = appName.name
      console.log(screen.width)
      if (screen.width < 767) {
        for (let i = 0; i < apps.length; i++) {
          apps[i].minW = screen.width - 40
        }
      }
      for (let i = 0; i < apps.length; i++) {
        apps[i].posX = screen.width / 2 - apps[i].minW / 2
        apps[i].posY = screen.height / 2 - apps[i].minH / 2 - screen.height / 11
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
