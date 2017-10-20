const {app, BrowserWindow} = require('electron')
const path = require('path')
const url = require('url')
const express = require('express'); //your express app

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let win

let appToken;

app.on('ready', function() {
  const e = express();
  e.get('/authorize_callback', (req, res) => {
      appToken = req.param('code');
      res.redirect('/');
  })
  e.listen(5000, () => {
      console.log('listening on port 5000')
  })
  e.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
  })
  e.get('/dist/:fileName', (req, res) => {
    res.sendFile(path.join(__dirname, "dist", req.params.fileName));
  })

  mainWindow = new BrowserWindow({
    width: 1280,
    height: 720,
    autoHideMenuBar: true,
    useContentSize: true,
    resizable: false,
  });
  mainWindow.webContents.openDevTools()
  mainWindow.loadURL('http://localhost:5000/');
  mainWindow.focus();
});

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (win === null) {
    createWindow()
  }
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.