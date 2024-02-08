const { contextBridge } = require('electron');

// Expose protected methods that allow the renderer process to use
contextBridge.exposeInMainWorld('electronAPI', {
  setLocalStorage: (key, value) => localStorage.setItem(key, value),
  getLocalStorage: (key) => localStorage.getItem(key)
});
