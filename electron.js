const { app, BrowserWindow } = require('electron')
const path = require('path')

function createWindow () {
  // Create the browser window.
  let win = new BrowserWindow({ width: 800, height: 600, titleBarStyle: 'hidden' })

  // and load the index.html of the app.
  win.loadFile(path.join(__dirname, './dist/index.html'))
}

app.on('ready', createWindow)