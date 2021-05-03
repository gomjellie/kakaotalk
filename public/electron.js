const dotenv = require('dotenv');
const { app, BrowserWindow, globalShortcut } = require('electron')
const path = require('path');

dotenv.config({ path: path.join(__dirname, '../.env') })

let gWin = null;

function createWindow () {
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
  return win;
}

app.whenReady().then(() => {
  gWin = createWindow();
  globalShortcut.register('Command+1', () => {
    gWin.webContents.send('fromMain', 'switch/friend');
  })

  globalShortcut.register('Command+2', () => {
    gWin.webContents.send('fromMain', 'switch/chat');
  })

  globalShortcut.register('Command+3', () => {
    gWin.webContents.send('fromMain', 'switch/etc');
  })

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      gWin = createWindow();
    }
  })
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin')
    app.quit()
})
