import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    apps: [
      {
        name: 'Projects',
        tag: 'app',
        icon: 'fa-folder',
        iconColor: 'text-green-200',
        component: 'Projects',
        posX: null,
        posY: null,
        minW: 400,
        minH: 200,
        minimized: false,
        maximized: false,
        x: null,
        y: null,
        ref: null
      },
      {
        name: 'About me',
        tag: 'app',
        icon: 'fa-address-card',
        iconColor: 'text-pink-200',
        component: 'About',
        posX: null,
        posY: null,
        minW: 700,
        minH: 395,
        minimized: false,
        maximized: false,
        x: null,
        y: null,
        ref: null
      },
      {
        name: 'Skills',
        tag: 'app',
        icon: 'fa-gamepad',
        iconColor: 'text-purple-200',
        component: 'Skills',
        posX: null,
        posY: null,
        minW: 800,
        minH: 500,
        minimized: false,
        maximized: false,
        x: null,
        y: null,
        ref: null
      },
      {
        name: 'Contact me',
        tag: 'app',
        icon: 'fa-envelope-open-text',
        iconColor: 'text-indigo-200',
        component: 'Contact',
        posX: null,
        posY: null,
        minW: 300,
        minH: 400,
        minimized: false,
        maximized: false,
        x: null,
        y: null,
        ref: null
      },
      {
        name: 'Lightning Bet',
        tag: 'project',
        icon: 'fa-volume-up',
        iconColor: 'text-green-200',
        component: 'LightningBet',
        posX: null,
        posY: null,
        minW: 600,
        minH: 400,
        minimized: false,
        maximized: false,
        x: null,
        y: null,
        ref: null
      },
      {
        name: 'Wine Pairing',
        tag: 'project',
        icon: 'fa-volume-up',
        iconColor: 'text-pink-200',
        component: 'WinePairing',
        posX: null,
        posY: null,
        minW: 600,
        minH: 400,
        minimized: false,
        maximized: false,
        x: null,
        y: null,
        ref: null
      },
      {
        name: 'Portfolio',
        tag: 'project',
        icon: 'fa-volume-up',
        iconColor: 'text-red-200',
        component: 'Portfolio',
        posX: null,
        posY: null,
        minW: 600,
        minH: 400,
        minimized: false,
        maximized: false,
        x: null,
        y: null,
        ref: null
      }
    ],
    openedApps: [],
    activeApp: '',
    startMenuOpened: false,
    mode: 'Light',
    mostRecentClick: null,
    currentRef: null
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
