import { app, BrowserWindow } from "electron";
let mainWindow: BrowserWindow;
app.whenReady().then(() => {
  mainWindow = new BrowserWindow({
    autoHideMenuBar: true,
    width: 1920,
    minWidth: 1240,
    height: 1080,
    minHeight: 600,
    titleBarOverlay: {
      color: "#a6559d",
      symbolColor: "black",
    },
    webPreferences: {
      devTools: true,
      nodeIntegration: true,
      // 允许html页面上的javascipt代码访问nodejs 环境api代码的能力（与node集成的意思）
    },
  });
  mainWindow.loadURL(process.argv[2]);
});
