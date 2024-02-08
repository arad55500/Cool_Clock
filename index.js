const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
  const win = new BrowserWindow({
    width: 700,
    height: 570,
    resizable: false,
    autoHideMenuBar: true,
    title: 'Cool Clock V1.1 by Arad Okanin',
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      nodeIntegration: false,
    }
  });

  // and load the index.html of the app.
  win.loadFile('index.html');

  // Uncomment the following line if you want to open dev tools by default:
  // win.webContents.openDevTools();
}

// This method will be called when Electron has finished
app.whenReady().then(createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});


// In this file you can include the rest of your app's specific main process
app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
