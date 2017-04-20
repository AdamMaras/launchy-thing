(function() {
    // this grabs the IPC library used by Electron
    const ipcRenderer = require("electron").ipcRenderer;

    // this makes a function that you can use in your HTML
    window.performLaunch = function() {
        // this call initiates the event that gets handled in main.js
        ipcRenderer.send("perform-launch");
    }
})();
