<template>
  <transition @enter="taskbarEnter">
    <div
      v-if="items.startMenuOpened"
      ref="startMenu"
      class="fixed bottom-8 w-64 h-96 flex opacity-90 shadow-lg select-none z-50 text-center text-white font-extralight"
    >
      <nav class="bg-gray-900 w-full pl-12 pt-2">
        <ul v-for="(app, index) in items.apps" :key="index">
          <li
            class="my-1 flex items-center justify-start hover:bg-gray-600 duration-150 textShadow "
            @click="
              openApp(app)
              getClickPosition($event)
              resizeAndPlace()
            "
          >
            <i
              class="fas fa-lg w-12 py-4 bg-blue-200 rounded-lg"
              :class="[app.icon, app.iconColor]"
            ></i>
            <p class="px-2">{{ app.name }}</p>
          </li>
        </ul>
      </nav>
      <div
        class="bg-gray-900 h-96 w-12 fixed flex flex-col justify-between sideMenu"
      >
        <div class="text-3xl p-2">☰</div>
        <div class="flex flex-col">
          <a
            href="https://github.com/Peppek1993"
            target="_blank"
            class="px-2 hover:text-green-300 duration-200"
          >
            <i class="fab fa-github fa-lg py-4"></i>
          </a>
          <div
            class="px-2 cursor-pointer hover:text-green-300 duration-200"
            @click="reload"
          >
            <i class="fas fa-power-off fa-lg py-4"></i>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import { mapGetters } from 'vuex'
import { gsap } from 'gsap'
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
    reload() {
      location.reload()
    },
    getClickPosition(event) {
      this.items.mostRecentClick = {
        x: event.clientX,
        y: event.clientY
      }
    },
    taskbarEnter() {
      let { startMenu } = this.$refs
      gsap.from(startMenu, 0.5, { opacity: 0, translateY: 300, ease: 'power3' })
    }
  }
}
</script>

<style></style>
