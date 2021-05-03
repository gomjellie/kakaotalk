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
    minHeight: 650,
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
  {
    label: "Edit",
    submenu: [
      { role: "undo" },
      { role: "redo" },
      { type: "separator" },
      { role: "cut" },
      { role: "copy" },
      {
        role: "paste",
      },
      {
        role: "pasteandmatchstyle",
      },
      {
        role: "delete",
      },
      {
        role: "selectall",
      },
    ],
  },
  {
    label: "View",
    submenu: [
      {
        label: "Reload",
        accelerator: "CmdOrCtrl+R",
        click(item, focusedWindow) {
          if (focusedWindow) focusedWindow.reload();
        },
      },
      {
        label: "Toggle Developer Tools",
        accelerator:
          process.platform === "darwin" ? "Alt+Command+I" : "Ctrl+Shift+I",
        click(item, focusedWindow) {
          if (focusedWindow) focusedWindow.webContents.toggleDevTools();
        },
      },
      {
        type: "separator",
      },
      {
        role: "resetzoom",
      },
      {
        role: "zoomin",
      },
      {
        role: "zoomout",
      },
      {
        type: "separator",
      },
      {
        role: "togglefullscreen",
      },
    ],
  },
  {
    role: "window",
    submenu: [
      {
        role: "minimize",
      },
      {
        role: "close",
      },
    ],
  },
  {
    role: "help",
    submenu: [
      {
        label: "Learn More",
        click() {
          require("electron").shell.openExternal("http://electron.atom.io");
        },
      },
    ],
  },
];

if (process.platform === "darwin") {
  template.unshift({
    label: app.getName(),
    submenu: [
      {
        role: "about",
      },
      {
        type: "separator",
      },
      {
        role: "services",
        submenu: [],
      },
      {
        type: "separator",
      },
      {
        role: "hide",
      },
      {
        role: "hideothers",
      },
      {
        role: "unhide",
      },
      {
        type: "separator",
      },
      {
        role: "quit",
      },
    ],
  });
  // Edit menu.
  template[1].submenu.push(
    {
      type: "separator",
    },
    {
      label: "Speech",
      submenu: [
        {
          role: "startspeaking",
        },
        {
          role: "stopspeaking",
        },
      ],
    }
  );
  // Window menu.
  template[3].submenu = [
    {
      label: "Close",
      accelerator: "CmdOrCtrl+W",
      role: "close",
    },
    {
      label: "Minimize",
      accelerator: "CmdOrCtrl+M",
      role: "minimize",
    },
    {
      label: "Zoom",
      role: "zoom",
    },
    {
      type: "separator",
    },
    {
      label: "Bring All to Front",
      role: "front",
    },
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
        gWin.webContents.send("fromMain", "switch/etc");
      },
    },
    {
      role: "close",
    },
  ];
}

const menu = Menu.buildFromTemplate(template);
Menu.setApplicationMenu(menu);
