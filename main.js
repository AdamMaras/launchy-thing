const path = require("path");
const url = require("url");
const proc = require("child_process");

const electron = require("electron");

const app = electron.app;
const ipcMain = electron.ipcMain;

let mainWindow = null;

// makes the window and points at at index.html
function createWindow() {
    mainWindow = new electron.BrowserWindow({ width: 800, height: 600 });
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, "index.html"),
        protocol: "file:",
        slashes: true
    }));

    mainWindow.on("closed", function () {
        mainWindow = null;
    });
}

// create the window when it's time
app.on("ready", createWindow);

// exit if all windows closed
app.on("window-all-closed", function () {
    app.quit();
});

// this is the listener for the event that gets emitted in renderer.js
ipcMain.on("perform-launch", function (event, arg) {
    // LAUNCH YOUR APPLICATION HERE
    proc.exec("open /Applications/Calculator.app/");
    // or proc.exec("notepad.exe"); or whatever, this is just like Win+R
});
