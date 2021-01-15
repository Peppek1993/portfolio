<template>
  <div
    class="p-4 h-full rounded-b-xl  font-light text-lg overflow-y-auto sm:overflow-hidden overflow-x-hidden relative"
  >
    <div class="flex-row flex justify-around items-center h-full">
      <div v-for="(app, index) in items.projects" :key="index" class="pb-2">
        <div
          class="rounded-md p-2 flex flex-col items-center"
          :class="[
            { 'hover:bg-gray-800': items.mode == 'dark' },
            { 'hover:bg-green-200': items.mode == 'light' }
          ]"
          @click="openApp(app)"
        >
          <i class="fas fa-3x px-4 pt-2 text-green-500" :class="app.icon"></i>
          <p class="text-center  font-light text-sm pt-2">
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
      let uniqueApps = apps.filter(app => app.name == appName.name)
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
