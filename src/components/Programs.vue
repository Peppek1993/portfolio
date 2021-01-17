<template>
  <div class="p-4 select-none absolute text-center">
    <div v-for="(app, index) in apps" ref="appIcon" :key="index" class="pb-24">
      <vue-draggable-resizable
        class-name-active="app-active-class"
        :resizable="false"
        :w="80"
        :h="80"
      >
        <div
          class="appClass h-20 w-20"
          @click="
            openApp(app)
            getClickPosition($event, index)
            resizeAndPlace()
          "
        >
          <i class="fas fa-3x h-12 w-20" :class="[app.icon, app.iconColor]"></i>
          <p class="text-white font-light text-sm textShadow">
            {{ app.name }}
          </p>
        </div>
      </vue-draggable-resizable>
    </div>
    <div ref="light" class="w-20 h-20" @click="switchMode">
      <i
        class="fas fa-lightbulb fa-3x"
        :class="[
          { 'text-yellow-200': items.mode == 'Dark' },
          { 'text-indigo-900': items.mode == 'Light' }
        ]"
      ></i>
      <p class="text-white font-light text-sm textShadow">
        {{ items.mode }} Mode
      </p>
    </div>
  </div>
</template>

<script>
import { TimelineLite } from 'gsap'
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['items']),
    apps() {
      return this.items.apps.filter(app => app.tag == 'app')
    }
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
    switchMode() {
      if (this.items.mode == 'Light') {
        this.items.mode = 'Dark'
      } else if (this.items.mode == 'Dark') {
        this.items.mode = 'Light'
      }
    },
    getClickPosition(event, index) {
      this.items.mostRecentClick = {
        x: event.clientX,
        y: event.clientY
      }
      this.items.apps[index].x = event.clientX
      this.items.apps[index].y = event.clientY
    }
  }
}
</script>
<style></style>
