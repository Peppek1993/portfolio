import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    apps: [
      {
        name: 'CV',
        icon: 'fa-file-csv',
        isOpen: false,
        component: 'CV',
        pos: 1
      },
      {
        name: 'Projects',
        icon: 'fa-folder',
        isOpen: false,
        component: 'Projects',
        pos: 2
      },
      {
        name: 'About me',
        icon: 'fa-address-card',
        isOpen: false,
        component: 'About',
        pos: 3
      },
      {
        name: 'MS-DOS',
        icon: 'fa-gamepad',
        isOpen: false,
        component: 'MSDOS',
        pos: 4
      },
      {
        name: 'Explorer',
        icon: 'fa-folder-open',
        isOpen: false,
        component: 'Explorer',
        pos: 5
      },
      {
        name: 'Winamp',
        icon: 'fa-volume-up',
        isOpen: false,
        component: 'Winamp',
        pos: 6
      }
    ],
    openedApps: [],
    activeApp: ''
  },
  mutations: {},
  actions: {},
  modules: {},
  getters: {
    items: state => {
      return state
    }
  }
})
