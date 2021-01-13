<template>
  <div>
    <div
      v-for="(app, index) in items.openedApps"
      v-show="!app.minimized"
      :key="index + 'a'"
      class="relative"
      :class="[{ 'z-50 ': app.name == items.activeApp }, app.name]"
      @mousedown="makeActive(app.name)"
    >
      <vue-draggable-resizable
        v-show="!app.maximized"
        :handles="[]"
        :resizable="false"
        :y="app.posY"
        :x="app.posX"
        :w="app.minW"
        :h="app.minH"
        :min-width="app.minW"
        :min-height="app.minH"
        drag-handle=".header"
        class="window rounded-xl"
        :class="{ 'windowLight ': items.mode == 'light' }"
      >
        <div
          class="header flex rounded-t-xl select-none textShadow"
          :class="{ 'headerLight ': items.mode == 'light' }"
        >
          <ul class="flex py-2 pl-2">
            <a class="button close-btn" @click="exitApp(app)"></a>
            <a class="button min-btn" @click="app.minimized = true"></a>
            <a class="button max-btn" @click="app.maximized = true"></a>
          </ul>
          <h1 class="w-full text-center text-white font-extralight">
            {{ app.name }}
          </h1>
        </div>
        <div class="w-full h-full content">
          <!-- <pdf src="./../../lightningbet.pdf"></pdf> -->
          <component :is="app.component"></component>
        </div>
      </vue-draggable-resizable>
    </div>
    <div
      v-for="(app, index) in items.openedApps"
      v-show="app.maximized && !app.minimized"
      :key="index"
      :class="[
        { 'z-40 ': app.name == items.activeApp },
        app.name,
        { 'windowLight ': items.mode == 'light' }
      ]"
      class="fixed bottom-0 w-full h-full pb-8 window"
    >
      <div
        class="header flex select-none"
        :class="{ 'headerLight ': items.mode == 'light' }"
      >
        <ul class="flex py-2 pl-2">
          <a class="button close-btn" @click="exitApp(app)"></a>
          <a class="button min-btn" @click="app.minimized = true"></a>
          <a class="button max-btn" @click="app.maximized = false"></a>
        </ul>
        <h1 class="w-full text-center font-extralight">
          {{ app.name }}
        </h1>
      </div>
      <div class="w-full h-full content">
        <component :is="app.component"></component>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import About from './Apps/About.vue'
import Skills from './Apps/Skills.vue'
import Projects from './Apps/Projects.vue'
import Contact from './Apps/Contact.vue'
import LightningBet from './Projects/LightningBet.vue'
import Portfolio from './Projects/Portfolio.vue'
import WinePairing from './Projects/WinePairing.vue'
export default {
  components: {
    About,
    Skills,
    Projects,
    LightningBet,
    Portfolio,
    WinePairing,
    Contact
  },
  computed: {
    ...mapGetters(['items'])
  },
  methods: {
    exitApp(appName) {
      this.items.openedApps = this.items.openedApps.filter(
        app => app !== appName
      )
    },
    makeActive(appName) {
      this.items.activeApp = this.activeApp = appName
    }
  }
}
</script>

<style>
/* Header */

.header {
  background-color: rgb(54, 54, 54);
}

.headerLight {
  background-color: rgb(225, 225, 225);
}
/* Window */

.window {
  background-color: rgb(30, 30, 30);
  border: 0.5px solid rgb(90, 90, 90);
}

.windowLight {
  background-color: rgb(252, 252, 252);
  border: 0.5px solid rgb(180, 180, 180);
}

/* Content */

.content {
  padding-bottom: 27px;
}
/* Buttons */

.button {
  border-radius: 50%;
  width: 14px;
  height: 14px;
  margin-right: 8px;
  position: relative;
}

.button:before,
.button:after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 1px;
  visibility: hidden;
}
.button:last-child {
  margin-right: 0;
}

.button:hover:before,
.button:hover:after {
  visibility: visible;
}

/* Close Button */

.close-btn {
  background: #ff5d5b;
  border: 1px solid #cf544d;
}

.close-btn:before,
.close-btn:after {
  width: 1px;
  height: 70%;
  background: #460100;
}

.close-btn:before {
  transform: translate(-50%, -50%) rotate(45deg);
}

.close-btn:after {
  transform: translate(-50%, -50%) rotate(-45deg);
}

/* Min Button */

.min-btn {
  background: #ffbb39;
  border: 1px solid #cfa64e;
}

.min-btn:before {
  width: 70%;
  height: 1px;
  background: #460100;
}

/* Max Button */

.max-btn {
  background: #00cd4e;
  border: 1px solid #0ea642;
}

.max-btn:before {
  width: 50%;
  height: 50%;
  background: #024d04;
}

.max-btn:after {
  width: 1px;
  height: 70%;
  transform: translate(-50%, -50%) rotate(-45deg);
  background: #00cd4e;
}
</style>
