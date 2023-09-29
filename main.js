const { app, BrowserWindow, ipcMain, Notification } = require("electron");
const path = require("path");
const isDev = !app.isPackaged;
const connectDB = require("./config/db");

// connect to dataBase
connectDB();

function createMainWindow() {
  const mainWindow = new BrowserWindow({
    title: "project Management",
    width: 700,
    height: 600,
    // backgroundColor: "blue",
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      enableRemoteModule: true,
      worldSafeExecuteJavaScript: true,
      contextIsolation: true,
      preload: path.join(__dirname, "preload.js"),
    },
  });

  mainWindow.loadFile(path.join(__dirname, "./renderer/index.html"));
  isDev && win.webContents.openDevTools();
}

if (isDev) {
  require("electron-reload")(__dirname, {
    electron: path.join(__dirname, "node_modules", ".bin", "electron"),
  });
}

app.whenReady().then(() => {
  createMainWindow();
});

ipcMain.on("notify", (e, message) => {
  new Notification({ title: "Notification", body: message }).show();
});
