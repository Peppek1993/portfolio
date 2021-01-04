<template>
  <div>
    <div
      v-for="(app, index) in items.openedApps"
      :key="index"
      class="relative"
      :class="[{ 'z-50 ': app.name == items.activeApp }, app.name]"
      @mousedown="makeActive(app.name)"
    >
      <vue-draggable-resizable
        :y="-500 + app.pos * 20"
        :x="50 + app.pos * 10"
        drag-handle=".header"
        class="window rounded-xl"
      >
        <div class="header flex rounded-t-xl select-none">
          <ul class="flex py-2 pl-2">
            <a class="button close-btn" @click="exitApp(app)"></a>
            <a class="button min-btn"></a>
            <a class="button max-btn"></a>
          </ul>
          <h1 class="w-full text-center text-white font-thin">
            {{ app.name }}
          </h1>
        </div>
        <div class="w-full h-full content opacity-50">
          <!-- <pdf src="./../../lightningbet.pdf"></pdf> -->
          <component :is="app.component"></component>
        </div>
      </vue-draggable-resizable>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import CV from './Apps/CV.vue'
import Winamp from './Apps/Winamp.vue'
import About from './Apps/About.vue'
import Explorer from './Apps/Explorer.vue'
import MSDOS from './Apps/MSDOS.vue'
import Projects from './Apps/Projects.vue'
//import pdf from 'vue-pdf'
export default {
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
      console.log(this.items.activeApp)
    }
  },
  components: {
    CV,
    Winamp,
    About,
    Explorer,
    MSDOS,
    Projects
    //pdf
  }
}
</script>

<style>
/* Header */

.header {
  background-color: rgb(54, 54, 54);
}
/* Window */

.window {
  background-color: rgb(30, 30, 30);
  border: 0.5px solid rgb(90, 90, 90);
}

/* Content */

.content {
  padding-bottom: 27px;
}
/* Buttons */

.button {
  border-radius: 50%;
  width: 12px;
  height: 12px;
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
