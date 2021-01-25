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
        iconColor: 'text-green-300',
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
        iconColor: 'text-pink-300',
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
        iconColor: 'text-yellow-300',
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
        iconColor: 'text-indigo-300',
        component: 'Contact',
        posX: null,
        posY: null,
        minW: 400,
        minH: 450,
        minimized: false,
        maximized: false,
        x: null,
        y: null,
        ref: null
      },
      {
        name: 'Lightning Bet',
        tag: 'project',
        icon: 'fa-dice',
        iconColor: 'text-red-300',
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
        icon: 'fa-wine-bottle',
        iconColor: 'text-yellow-300',
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
        icon: 'fa-chalkboard-teacher',
        iconColor: 'text-indigo-300',
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
    mode: 'Dark',
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
