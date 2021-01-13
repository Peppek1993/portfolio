import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    apps: [
      {
        name: 'Projects',
        icon: 'fa-folder',
        component: 'Projects',
        posX: null,
        posY: null,
        minW: 400,
        minH: 395,
        minimized: false,
        maximized: false
      },
      {
        name: 'About me',
        icon: 'fa-address-card',
        component: 'About',
        posX: null,
        posY: null,
        minW: 700,
        minH: 395,
        minimized: false,
        maximized: false
      },
      {
        name: 'Skills',
        icon: 'fa-gamepad',
        component: 'Skills',
        posX: null,
        posY: null,
        minW: 800,
        minH: 500,
        minimized: false,
        maximized: false
      },
      {
        name: 'Contact me',
        icon: 'fa-envelope-open-text',
        component: 'Contact',
        posX: null,
        posY: null,
        minW: 800,
        minH: 500,
        minimized: false,
        maximized: false
      }
    ],
    openedApps: [],
    activeApp: '',
    startMenuOpened: false,
    mode: 'dark',
    projects: [
      {
        name: 'Lightning Bet',
        icon: 'fa-volume-up',
        component: 'LightningBet',
        posX: null,
        posY: null,
        minW: 600,
        minH: 400,
        minimized: false,
        maximized: false
      },
      {
        name: 'Wine Pairing',
        icon: 'fa-volume-up',
        component: 'WinePairing',
        posX: null,
        posY: null,
        minW: 600,
        minH: 400,
        minimized: false,
        maximized: false
      },
      {
        name: 'Portfolio',
        icon: 'fa-volume-up',
        component: 'Portfolio',
        posX: null,
        posY: null,
        minW: 600,
        minH: 400,
        minimized: false,
        maximized: false
      }
    ]
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
