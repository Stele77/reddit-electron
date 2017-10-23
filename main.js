const {app, BrowserWindow} = require('electron')
const path = require('path')
const url = require('url')
const express = require('express'); //your express app
const storage = require('electron-json-storage');
const axios = require('axios');

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let win

let appToken;

app.on('ready', function() {
  const e = express();
  axios.defaults.headers.common['Content-Type'] = "application/x-www-form-urlencoded";      
  axios.defaults.headers.common['Authorization'] = 'Basic TmdwZ0ZjN0R4em1nQlE6'

  e.get('/authorize_callback', (req, res) => {
      appToken = req.param('code');
      let body = "grant_type=authorization_code&code=" + appToken + "&redirect_uri=http://127.0.0.1:5000/authorize_callback"
      axios.post('https://www.reddit.com/api/v1/access_token', body).then(result => {
        storage.set('token', result.data.access_token, (err) => {
          if(err) throw err;
        });  
        res.redirect('/');
      }, err => {
        throw err;
      })
  });

  e.listen(5000, () => {
      console.log('listening on port 5000')
  })
  e.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
  })
  e.get('/dist/:fileName', (req, res) => {
    res.sendFile(path.join(__dirname, "dist", req.params.fileName));
  })

  e.get('/auth/token', (req, res) => {
    console.log('getting token');
    storage.get('token', (err, token) => {
      if (err) throw err;
      if(Object.keys(token).length == 0) {
        res.send({ token: null });
      } else {
        res.send({token: token})
      }
    });
  })

  e.get('/auth/clearToken', (req, res) => {
    storage.clear();
    res.redirect('/')
  })

  e.get('*', (req, res) => {
  })

  mainWindow = new BrowserWindow({
    width: 1280,
    height: 720,
    autoHideMenuBar: true,
    useContentSize: true,
    resizable: true,
    icon: __dirname + '/src/favicon.ico'
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