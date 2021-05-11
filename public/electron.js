const dotenv = require("dotenv");
const { app, BrowserWindow, Menu, ipcMain } = require("electron");
const path = require("path");
const { SWITCH_FRIEND, SWITCH_CHAT, SWITCH_MORE, OPEN_CHAT_ROOM } = require("./constants");
dotenv.config({ path: path.join(__dirname, "../.env") });

let mainWindow = null;
const windows = new Set();

function createWindow(name = "main", initialPayload = SWITCH_FRIEND) {
  let win = new BrowserWindow({
    show: false,
    webPreferences: {
      enableRemoteModule: true,
      preload: `${__dirname}/preload.js`,
    },
    width: 390,
    height: 800,
    minWidth: 390,
    minHeight: 660,
    titleBarStyle: "hidden",
  });
  win.name = name;
  if (process.env.mode === "dev") {
    win.loadURL("http://localhost:3000");
    win.webContents.openDevTools();
  } else {
    win.loadFile(`${path.join(__dirname, "../build/index.html")}`);
  }
  win.webContents.once('dom-ready', () => {
    // switch to initial tab
    win.webContents.send("fromMain", initialPayload);
  });

  win.once("ready-to-show", () => win.show());
  win.on("closed", () => {
    windows.delete(win);
    win = null;
  });

  windows.add(win);
  return win;
}

app.whenReady().then(() => {
  mainWindow = createWindow();

  app.on("activate", () => {
    if (windows.size === 0) {
      mainWindow = createWindow();
    }
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});

ipcMain.on('toMain', (event, arg) => {
  createWindow('ChatRoom', {
    ...OPEN_CHAT_ROOM, title: arg.title,
  });
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
          if (windows.has(mainWindow) === false) {
            mainWindow = createWindow();
          }
          mainWindow.focus();
          mainWindow?.webContents?.send?.("fromMain", SWITCH_FRIEND);
        },
      },
      {
        label: "Chats",
        accelerator: isCupertino ? "Cmd+2" : "Ctrl+2",
        click: () => {
          if (windows.has(mainWindow) === false) {
            mainWindow = createWindow();
          }
          mainWindow.focus();
          mainWindow.webContents.send("fromMain", SWITCH_CHAT);
        },
      },
      {
        label: "More",
        accelerator: isCupertino ? "Cmd+3" : "Ctrl+3",
        click: () => {
          if (windows.has(mainWindow) === false) {
            mainWindow = createWindow();
          }
          mainWindow.focus();
          mainWindow.webContents.send("fromMain", SWITCH_MORE);
        },
      },
      {
        label: 'New Window',
        accelerator: 'Cmd+N',
        click: () => {
          createWindow('ChatRoom', {
            ...OPEN_CHAT_ROOM, roomName: '일론머스크',
          });
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
