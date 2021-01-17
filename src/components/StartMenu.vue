<template>
  <div
    v-show="items.startMenuOpened"
    class="fixed bottom-8 w-64 h-96 flex opacity-90 shadow-lg select-none z-50 text-center text-white font-extralight"
  >
    <div class="bg-gray-900 w-full pl-12 pt-2">
      <div v-for="(app, index) in items.apps" :key="index">
        <div
          class="my-1 flex items-center justify-start hover:bg-gray-600 duration-150 textShadow "
          @click="
            openApp(app)
            getClickPosition($event)
            resizeAndPlace()
          "
        >
          <i
            class="fas fa-x w-12 py-4 bg-blue-200 rounded-lg"
            :class="[app.icon, app.iconColor]"
          ></i>
          <p class="px-2">{{ app.name }}</p>
        </div>
      </div>
    </div>
    <div
      class="bg-gray-900 h-96 w-12 fixed flex flex-col justify-between sideMenu"
    >
      <div class="text-3xl p-2 flex">
        <p>☰</p>
        <span class="px-4 none sideText">Start</span>
      </div>
      <div class="flex flex-col w-full">
        <a
          href="#"
          target="_blank"
          class="flex items-center hover:bg-gray-700 duration-100 px-2"
        >
          <i class="fab fa-github fa-lg py-4"></i>
          <p class="px-4 sideText">Github</p>
        </a>
        <div
          class="flex items-center hover:bg-gray-700 duration-100 px-2 cursor-pointer"
          @click="reload"
        >
          <i class="fas fa-power-off fa-lg py-4"></i>
          <p class="px-4 sideText">Power</p>
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
      let openedApps = this.items.openedApps
      this.items.startMenuOpened = false
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
    reload() {
      location.reload()
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

<style>
/* Side menu animations */
.sideMenu {
  transition: width 200ms ease;
}

.sideMenu:hover .sideText {
  display: block;
}
.sideMenu:hover {
  width: 12rem;
  opacity: 90%;
}

.sideText {
  display: none;
}
</style>
