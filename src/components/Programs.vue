<template>
  <div class="p-2 select-none absolute">
    <!--App icons -->
    <div
      v-for="(app, index) in items.apps"
      ref="appIcon"
      :key="index"
      class="pb-24"
    >
      <vue-draggable-resizable
        :handles="[]"
        class-name-active="app-active-class"
        :resizable="false"
        :w="80"
        :h="80"
      >
        <div class="appClass h-20 w-20" @click="openApp(app)">
          <i
            class="fas fa-3x text-green-500 h-12 w-20 text-center"
            :class="app.icon"
          ></i>
          <p class="text-center text-white font-light text-sm textShadow">
            {{ app.name }}
          </p>
        </div>
      </vue-draggable-resizable>
    </div>
    <!-- Dark/light mode switcher -->
    <div
      v-if="items.mode == 'dark'"
      ref="light"
      class="w-20 h-20 text-center"
      @click="switchMode"
    >
      <i class="fas fa-lightbulb fa-3x text-yellow-200 text-center"></i>
      <p class="text-center text-white font-light text-sm textShadow">
        Light mode
      </p>
    </div>
    <div
      v-if="items.mode == 'light'"
      class="w-20 h-20 text-center"
      @click="switchMode"
    >
      <i class="fas fa-lightbulb fa-3x text-indigo-900 text-center"></i>
      <p class="text-center text-white font-light text-sm textShadow">
        Dark mode
      </p>
    </div>
  </div>
</template>

<script>
import { TimelineLite } from 'gsap'
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['items'])
  },
  mounted() {
    const { appIcon, light } = this.$refs
    const timeline = new TimelineLite()

    timeline
      .to(light, 0, { opacity: 0, scale: 0.5 })
      .from(appIcon, 0.6, {
        delay: 0.2,
        translateY: -200,
        translateX: -100,
        opacity: 0,
        stagger: 0.2,
        ease: 'back'
      })
      .to(light, 0.2, { opacity: 1, scale: 1 })
      .to(light, 0.1, { scale: 0.8 })
      .to(light, 0.1, { scale: 1 })
  },
  methods: {
    openApp(appName) {
      let store = this.items
      let openedApps = store.openedApps
      let allApps = openedApps.concat(
        openedApps,
        store.minimizedApps,
        store.maximizedApps
      )
      store.minimizedApps = store.minimizedApps.filter(x => x !== appName)
      if (allApps.filter(app => app.name == appName.name) == 0) {
        openedApps.push(appName)
      }
      store.activeApp = appName.name
      if (screen.width < 767) {
        for (let i = 0; i < openedApps.length; i++) {
          openedApps[i].minW = screen.width - 40
        }
      }
      for (let i = 0; i < openedApps.length; i++) {
        openedApps[i].posX = screen.width / 2 - openedApps[i].minW / 2
        openedApps[i].posY =
          screen.height / 2 - openedApps[i].minH / 2 - screen.height / 11
      }
    },
    switchMode() {
      if (this.items.mode == 'light') {
        this.items.mode = 'dark'
      } else if (this.items.mode == 'dark') {
        this.items.mode = 'light'
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
