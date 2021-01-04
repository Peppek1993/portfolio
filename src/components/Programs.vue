<template>
  <div class="p-2 select-none">
    <div v-for="(app, index) in items.apps" :key="index" class="pb-24">
      <div>
        <vue-draggable-resizable
          :handles="[]"
          class-name-active="app-active-class"
          :resizable="false"
          :w="80"
          :h="80"
        >
          <div class="appClass h-20" @click="openApp(app)">
            <i class="fas fa-3x px-4 pt-2 text-green-500" :class="app.icon"></i>
            <p class="text-center text-white font-thin">{{ app.name }}</p>
          </div>
        </vue-draggable-resizable>
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
      this.items.openedApps.push(appName)
      this.items.openedApps = [...new Set(this.items.openedApps)]
      this.items.activeApp = appName.name
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
</style>
