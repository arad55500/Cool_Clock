const { contextBridge } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  setLocalStorage: (key, value) => localStorage.setItem(key, value),
  getLocalStorage: (key) => localStorage.getItem(key)
});
