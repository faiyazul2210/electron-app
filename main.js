const { ipcRenderer } = require('electron')
const { app, BrowserWindow, ipcMain } = require('electron/main')

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      contextIsolation: true,
      nodeIntegration: true,
      preload:Path.join( __dirname ,'./preload.js'),
    }
  })
  
  win.webContents.openDevTools()
  win.loadURL('http://localhost:3000')
}

app.whenReady().then(() => {
  createWindow()
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0)  {
        createWindow()
    }
  })
})

ipcMain.on('submit:todoForm', (event,args) => {
console.log(args)

})
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})