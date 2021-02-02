export default {
  methods: {
    openApp(appName) {
      let openedApps = this.items.openedApps
      if (openedApps.filter(app => app.name == appName.name).length == 0) {
        openedApps.push(appName)
      }
      this.items.activeApp = appName.name
    },
    resizeAndPlace() {
      let openedApps = this.items.openedApps
      let customHeight = document.getElementById('main').clientHeight
      let customWidth = document.getElementById('main').clientWidth
      if (customWidth < 767) {
        for (let i = 0; i < openedApps.length; i++) {
          if (openedApps[i].minW > customWidth) {
            openedApps[i].minW = customWidth - 40
          }
        }
      }
      if (customHeight < 500) {
        for (let i = 0; i < openedApps.length; i++) {
          if (openedApps[i].minH > customHeight) {
            openedApps[i].minH = customHeight - 100
          }
        }
      }
      for (let i = 0; i < openedApps.length; i++) {
        openedApps[i].posX = customWidth / 2 - openedApps[i].minW / 2
        openedApps[i].posY = customHeight / 2 - openedApps[i].minH / 2
      }
    }
  }
}
