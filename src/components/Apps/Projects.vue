<template>
  <div
    class="h-full rounded-b-xl font-light text-lg flex justify-around items-center"
  >
    <div v-for="(app, index) in projects" :key="index">
      <div
        class="rounded-md p-2 flex flex-col items-center duration-500"
        :class="[
          { 'hover:bg-gray-800': items.mode == 'Dark' },
          { 'hover:bg-indigo-100': items.mode == 'Light' }
        ]"
        @click="
          openApp(app)
          getClickPosition($event)
          resizeAndPlace()
        "
      >
        <i
          class="fas fa-3x px-4 pt-2"
          :class="[
            { 'text-green-200': items.mode == 'Dark' },
            { 'text-green-800': items.mode == 'Light' },
            app.icon
          ]"
        ></i>
        <p class="font-light text-sm pt-2">
          {{ app.name }}
        </p>
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
      for (let i = 0; i < openedApps.length; i++) {
        openedApps[i].posX = customWidth / 2 - openedApps[i].minW / 2
        openedApps[i].posY = customHeight / 2 - openedApps[i].minH / 2
      }
      if (customWidth < 767) {
        for (let i = 0; i < openedApps.length; i++) {
          openedApps[i].minW = customWidth - 40
        }
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
