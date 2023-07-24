const { app, Menu, BrowserWindow } = require('electron');
const path = require('path');

//Creating Menu template
const createTemplate = () => {
  return [
    {
      label: 'File',
      submenu: [ 
        { label: 'Empty text file', click: onEmptyTextFile },
        { type: 'separator' },
        { label: 'Open Text File', click: onOpenTextFile },
        { label: 'Open New Window', click: onOpenNewWindow },
        { label: 'Open Folder', click: onOpenFolder },
        { label: 'Open Recent', click: onOpenRecent },
        { type: 'separator' },
        { label: 'Save', click: onSave },
        { label: 'Save As', click: onSaveAs },
        { label: 'Share', click: onShare },
        { type: 'separator' },
        { label: 'Close J-Text', click: onCloseApp },
        { label: 'Close Folder', click: onCloseFolder },
        { label: 'Close Window', click: onCloseWindow },
        { label: 'Close', click: onClose }
      ]
    },
    {
      label: 'Edit',
      submenu: [
        {label: 'Undo', role: 'undo' },
        {label: 'Redo', click: onRedo },
        {label: 'Cut', click: onCut },
        {label: 'Copy', click: onCopy },
        {label: 'Paste', click: onPaste },
      ]
    }
  ]
}

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) {
  app.quit();
}

const createWindow = () => {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    },
  });

  // and load the index.html of the app.
  mainWindow.loadFile(path.join(__dirname, '/renderer/index.html'));
  console.log(__dirname);
  // Open the DevTools.
  mainWindow.webContents.openDevTools();
};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

//Applying custom Template
app.whenReady().then(() => {
  const menuTemplate = createTemplate();
  const menu = Menu.buildFromTemplate(menuTemplate);
  Menu.setApplicationMenu(menu);
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.

/**
 * Event handlers for File submenu.
 */

function onEmptyTextFile(){
  console.log("Hey you clicked on empty text file");
} 

function onOpenTextFile(){
  console.log("Hey you clicked on open text file")
}

function onOpenNewWindow(){
  console.log("Hey you clicked on open new window");
}

function onOpenFolder(){
  console.log("Hey you clicked on open folder");
}

function onOpenRecent(){
  console.log("Hey you clicked on open recent");
}

function onSave(){
  console.log("Hey you clicked on save");
}

function onSaveAs(){
  console.log("Hey you clicked on save as");
}

function onShare(){
  console.log("Hey you clicked on share");
}

function onCloseApp(){
  console.log("Hey you clicked on close app");
}

function onCloseFolder(){
  console.log("Hey you clicked on close folder");
}

function onCloseWindow(){
  console.log("Hey you clicked on close wiondow");
}

function onClose(){
  console.log("Hey you clicked on close");
}

/**
 * Event Handlers for Edit submenu.
 */

function onUndo(){
  console.log("Hey you clicked on undo");
}

function onRedo(){
  console.log("Hey you clicked on redo");
}

function onCut(){
  console.log("Hey you clicked on cut");
}

function onCopy(){
  console.log("Hey you clicked on copy");
}

function onPaste(){
  console.log("Hey you clicked on paste");
}
















