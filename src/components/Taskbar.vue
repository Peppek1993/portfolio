<template>
  <div
    class="fixed bottom-0 w-full h-8 bg-gray-900 customGrid opacity-80 z-50 textShadow text-white"
  >
    <div
      class="col-start-1 col-end-2"
      @click="items.startMenuOpened = !items.startMenuOpened"
    >
      <i
        class="fab fa-windows fa-lg p-2 hover:text-blue-400 hover:bg-gray-700 duration-500"
      ></i>
    </div>
    <div class="col-start-2 col-end-3 flex select-none font-extralight">
      <div
        v-for="(app, index) in items.openedApps"
        :key="index"
        class="taskApp duration-200 h-full md:w-40  flex mr-1"
        :class="[{ 'activeApp ': app.name == items.activeApp }, app.name]"
        @click="
          makeActive(app)
          getClickPosition($event)
          unMinimize(app, index)
        "
      >
        <i class="fas fa px-2 md:px-4 pt-2 text-blue-500" :class="app.icon"></i>
        <p class="px-1 py-1 hidden md:inline-block">{{ app.name }}</p>
      </div>
    </div>
    <div class="col-start-3 col-end-4 py-1  font-extralight pr-2">
      {{ currentDate }} {{ currentTime }}
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { gsap } from 'gsap'
export default {
  computed: {
    ...mapGetters(['items']),
    currentDate() {
      return new Date().toLocaleDateString()
    },
    currentTime() {
      return new Date().toLocaleTimeString([], { timeStyle: 'short' })
    }
  },
  methods: {
    makeActive(appName) {
      this.items.activeApp = this.activeApp = appName.name
      appName.minimized = false
    },
    getClickPosition(event) {
      this.items.mostRecentClick = {
        x: event.clientX,
        y: event.clientY
      }
    },
    unMinimize(appName, index) {
      setTimeout(() => {
        appName.minimized = false
      }, 200)
      let test = this.items.apps[index].ref
      gsap.to(test, 0.2, {
        scale: 1,
        translateX: index,
        translateY: index
      })
    }
  }
}
</script>

<style>
.customGrid {
  display: grid;
  grid-template-columns: 6vh 1fr auto;
}
.activeApp {
  background-color: rgba(205, 99, 207, 0.8);
}
.taskApp:hover {
  background-color: rgba(205, 99, 207, 0.5);
}
</style>
