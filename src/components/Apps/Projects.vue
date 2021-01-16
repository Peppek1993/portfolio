<template>
  <div
    class="p-4 h-full rounded-b-xl  font-light text-lg overflow-y-auto sm:overflow-hidden overflow-x-hidden relative"
  >
    <div class="flex-row flex justify-around items-center h-full">
      <div v-for="(app, index) in projects" :key="index" class="pb-2">
        <div
          class="rounded-md p-2 flex flex-col items-center"
          :class="[
            { 'hover:bg-gray-800': items.mode == 'dark' },
            { 'hover:bg-green-200': items.mode == 'light' }
          ]"
          @click="
            openApp(app)
            getClickPosition($event)
            resizeAndPlace()
          "
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
    ...mapGetters(['items']),
    projects() {
      return this.items.apps.filter(app => app.tag == 'project')
    }
  },
  methods: {
    openApp(appName) {
      let openedApps = this.items.openedApps
      if (openedApps.filter(app => app.name == appName.name).length == 0) {
        openedApps.push(appName)
      }
      this.items.activeApp = appName.name
    },
    resizeAndPlace() {
      let openedApps = this.items.openedApps
      let customHeight = document.getElementById('main').clientHeight
      let customWidth = document.getElementById('main').clientWidth
      if (customWidth < 767) {
        for (let i = 0; i < openedApps.length; i++) {
          openedApps[i].minW = customWidth - 40
        }
      }
      for (let i = 0; i < openedApps.length; i++) {
        openedApps[i].posX = customWidth / 2 - openedApps[i].minW / 2
        openedApps[i].posY = customHeight / 2 - openedApps[i].minH / 2
      }
    },
    getClickPosition(event) {
      this.items.mostRecentClick = {
        x: event.clientX,
        y: event.clientY
      }
    }
  }
}
</script>

<style></style>
