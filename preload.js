const { contextBridge,ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('versions', {
  node: () => process.versions.node,
  chrome: () => process.versions.chrome,
  electron: () => process.versions.electron,
  ping: () => ipcRenderer.invoke('ping')
  // we can also expose variables, not just functions
})


contextBridge.exposeInMainWorld('ipcRenderer', {
send:(channel,data)=>ipcRenderer.send(channel,data),
on:(channel,func)=>ipcRenderer.on(channel,(event,...args)=>func(...args))

})