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
    mode: 'dark',
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
