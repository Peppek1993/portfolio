<template>
  <div
    class="fixed bottom-0 w-full h-8 bg-gray-900 customGrid opacity-75 z-50 textShadow"
  >
    <div
      class="col-start-1 col-end-2"
      @click="items.startMenuOpened = !items.startMenuOpened"
    >
      <i
        class="fab fa-windows fa-lg text-white p-2 hover:text-blue-400 duration-500"
      ></i>
    </div>
    <div class="col-start-2 col-end-3 flex select-none font-extralight">
      <div
        v-for="(app, index) in items.openedApps"
        :key="index"
        class="taskApp duration-200 h-full md:w-40 text-white flex mr-1"
        :class="[{ 'activeApp ': app.name == items.activeApp }, app.name]"
        @click="
          makeActive(app.name)
          app.minimized = false
        "
      >
        <i class="fas fa px-2 md:px-4 pt-2 text-blue-500" :class="app.icon"></i>
        <p class="px-1 py-1 hidden md:inline-block">{{ app.name }}</p>
      </div>
    </div>
    <div class="col-start-3 col-end-4 py-1 text-white font-extralight">
      28.12 17:32
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
    makeActive(appName) {
      this.items.activeApp = this.activeApp = appName
    }
  }
}
</script>

<style>
.customGrid {
  display: grid;
  grid-template-columns: 6vh 1fr 12vh;
}
.activeApp {
  background-color: rgba(205, 99, 207, 0.8);
}
.taskApp:hover {
  background-color: rgba(205, 99, 207, 0.5);
}
</style>
