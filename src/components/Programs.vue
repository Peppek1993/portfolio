<template>
  <div
    class="p-4 select-none text-center flex absolute flex-col sm:flex-row md:flex-col"
  >
    <div
      v-for="(app, index) in apps"
      ref="appIcon"
      :key="index"
      class="pb-2 textShadow w-20"
    >
      <vue-draggable-resizable
        :handles="[]"
        :resizable="false"
        :w="80"
        :h="80"
        class-name="icon"
      >
        <div
          class="appClass h-20 border-none"
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
      <h4 class="text-white font-light text-sm textShadow">
        {{ currentMode }} Mode
      </h4>
    </div>
  </div>
</template>

<script>
import { TimelineLite } from 'gsap'
import { mapGetters } from 'vuex'
import openApp from '../mixins/openApp'
export default {
  mixins: [openApp],
  computed: {
    ...mapGetters(['items']),
    apps() {
      return this.items.apps.filter(app => app.tag == 'app')
    },
    currentMode() {
      if (this.items.mode == 'Light') return 'Dark'
      else return 'Light'
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
