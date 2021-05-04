const dotenv = require("dotenv");
const { app, BrowserWindow, Menu } = require("electron");
const path = require("path");

dotenv.config({ path: path.join(__dirname, "../.env") });

let gWin = null;

function createWindow() {
  let win = new BrowserWindow({
    show: false,
    webPreferences: {
      enableRemoteModule: true,
      preload: `${__dirname}/preload.js`,
    },
    width: 400,
    height: 800,
    minWidth: 400,
    minHeight: 660,
    titleBarStyle: "hidden",
  });
  if (process.env.mode === "dev") {
    win.loadURL("http://localhost:3000");
    // win.webContents.openDevTools()
  } else {
    // win.loadURL(`file://${path.join(__dirname, '../build/index.html')}`)
    console.log(`${path.join(__dirname, "../build/index.html")}`);
    win.loadFile(`${path.join(__dirname, "../build/index.html")}`);
  }

  win.once("ready-to-show", () => win.show());
  win.on("closed", () => {
    win = null;
  });
  return win;
}

app.whenReady().then(() => {
  gWin = createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      gWin = createWindow();
    }
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});

const isCupertino = process.platform === "darwin";

const template = [
  // { role: 'appMenu' }
  ...(isCupertino ? [{
    label: app.name,
    submenu: [
      { role: 'about' },
      { type: 'separator' },
      { role: 'services' },
      { type: 'separator' },
      { role: 'hide' },
      { role: 'hideothers' },
      { role: 'unhide' },
      { type: 'separator' },
      { role: 'quit' }
    ]
  }] : []),
  // { role: 'fileMenu' }
  {
    label: 'File',
    submenu: [
      isCupertino ? { role: 'close' } : { role: 'quit' }
    ]
  },
  // { role: 'editMenu' }
  {
    label: 'Edit',
    submenu: [
      { role: 'undo' },
      { role: 'redo' },
      { type: 'separator' },
      { role: 'cut' },
      { role: 'copy' },
      { role: 'paste' },
      ...(isCupertino ? [
        { role: 'pasteAndMatchStyle' },
        { role: 'delete' },
        { role: 'selectAll' },
        { type: 'separator' },
        {
          label: 'Speech',
          submenu: [
            { role: 'startSpeaking' },
            { role: 'stopSpeaking' }
          ]
        }
      ] : [
        { role: 'delete' },
        { type: 'separator' },
        { role: 'selectAll' }
      ])
    ]
  },
  // { role: 'viewMenu' }
  {
    label: 'View',
    submenu: [
      { role: 'reload' },
      { role: 'forceReload' },
      { role: 'toggleDevTools' },
      { type: 'separator' },
      { role: 'resetZoom' },
      { role: 'zoomIn' },
      { role: 'zoomOut' },
      { type: 'separator' },
      { role: 'togglefullscreen' }
    ]
  },
  // { role: 'windowMenu' }
  {
    label: 'Window',
    submenu: [
      { role: 'minimize' },
      { role: 'zoom' },
      {
        label: "friends",
        accelerator: isCupertino ? "Cmd+1" : "Ctrl+1",
        click: () => {
          gWin.webContents.send("fromMain", "switch/friend");
        },
      },
      {
        label: "Chats",
        accelerator: isCupertino ? "Cmd+2" : "Ctrl+2",
        click: () => {
          gWin.webContents.send("fromMain", "switch/chat");
        },
      },
      {
        label: "More",
        accelerator: isCupertino ? "Cmd+3" : "Ctrl+3",
        click: () => {
          gWin.webContents.send("fromMain", "switch/more");
        },
      },
      ...(isCupertino ? [
        { type: 'separator' },
        { role: 'front' },
        { type: 'separator' },
        { role: 'window' }
      ] : [
        { role: 'close' }
      ])
    ]
  },
  {
    role: 'help',
    submenu: [
      {
        label: 'Github Repository',
        click: async () => {
          const { shell } = require('electron')
          await shell.openExternal('https://github.com/gomjellie/kakaotalk')
        }
      }
    ]
  }
]

const menu = Menu.buildFromTemplate(template);
Menu.setApplicationMenu(menu);
