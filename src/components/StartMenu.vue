<template>
  <div
    v-show="items.startMenuOpened"
    class="fixed bottom-8 w-64 h-96 flex opacity-80"
  >
    <div class="bg-red-500 h-full w-12"></div>
    <div class="bg-gray-600 h-full w-full">
      <div v-for="(app, index) in items.apps" :key="index + 'b'">
        <div
          class="w-full h-12 flex items-center justify-start hover:bg-gray-700 duration-150 text-white textShadow font-extralight"
          @click="openApp(app)"
        >
          <i class="fas fa-x px-4 pt-2 text-gray-500" :class="app.icon"></i>
          <p>{{ app.name }}</p>
        </div>
      </div>
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
      this.items.startMenuOpened = false
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
    }
  }
}
</script>

<style></style>
