<template>
  <ul
    class="h-full rounded-b-xl font-light text-lg flex justify-around items-center"
  >
    <li
      v-for="(app, index) in projects"
      :key="index"
      class="rounded-md p-2 flex flex-col items-center duration-500"
      :class="[
        { 'hover:bg-gray-800': items.mode == 'Dark' },
        { 'hover:bg-indigo-100': items.mode == 'Light' }
      ]"
      @click="
        openApp(app)
        getClickPosition($event)
        resizeAndPlace()
      "
    >
      <i
        class="fas fa-3x px-4 pt-2"
        :class="[
          { 'text-indigo-300': items.mode == 'Dark' },
          { 'text-indigo-800': items.mode == 'Light' },
          app.icon
        ]"
      ></i>
      <h3 class="font-light text-sm pt-2">
        {{ app.name }}
      </h3>
    </li>
  </ul>
</template>

<script>
import { mapGetters } from 'vuex'
import openApp from '../../mixins/openApp'
export default {
  mixins: [openApp],
  computed: {
    ...mapGetters(['items']),
    projects() {
      return this.items.apps.filter(app => app.tag == 'project')
    }
  },
  methods: {
    getClickPosition(event) {
      this.items.mostRecentClick = {
        x: event.clientX,
        y: event.clientY
      }
    }
  }
}
</script>

<style></style>
