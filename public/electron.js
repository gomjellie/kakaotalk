const dotenv = require('dotenv');
const { app, BrowserWindow } = require('electron')
const path = require('path');

dotenv.config({ path: path.join(__dirname, '../.env') })

app.whenReady().then(() => {
  let win = new BrowserWindow({
    show: false,
    webPreferences: {
      enableRemoteModule: true,
      preload: `${__dirname}/preload.js`
    },
    width: 400,
    height: 800,
    minWidth: 400,
    minHeight: 650,
    titleBarStyle: 'hidden',
  })
  if (process.env.mode === 'dev') {
    win.loadURL('http://localhost:3000')
    // win.webContents.openDevTools()
  } else {
    // win.loadURL(`file://${path.join(__dirname, '../build/index.html')}`)
    console.log(`${path.join(__dirname, '../build/index.html')}`)
    win.loadFile(`${path.join(__dirname, '../build/index.html')}`)
  }

  win.once('ready-to-show', () => win.show());
  win.on('closed', () => {
    win = null;
  });
})

app.on('window-all-closed', () => {
  app.quit()
})
