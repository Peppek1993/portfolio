<template>
  <div
    class="p-4 h-full rounded-b-xl text-white font-light text-lg overflow-y-auto sm:overflow-hidden overflow-x-hidden relative"
  >
    <div class="sm:flex-row sm:flex justify-around items-center h-full">
      <div v-for="(app, index) in items.projects" :key="index" class="pb-2">
        <div
          class=" hover:bg-gray-700  rounded-md p-2 flex flex-col items-center"
          @click="
            openApp(app)
            app.minimized = false
          "
        >
          <i class="fas fa-3x px-4 pt-2 text-green-500" :class="app.icon"></i>
          <p class="text-center text-white font-light text-sm textShadow pt-2">
            {{ app.name }}
          </p>
          <p>{{ app.description }}</p>
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

<style></style>
