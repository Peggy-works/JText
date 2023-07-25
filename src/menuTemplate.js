//Creating Menu template
const createMenu = () => {
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
          { label: 'Undo', role: 'undo' },
          { label: 'Redo', role: 'redo' },
          { label: 'Cut', role: 'cut' },
          { label: 'Copy', role: 'copy' },
          { label: 'Paste', role: 'paste' }, 
          { type: 'separator' },
          { label: 'Toggle Line Comment', click: onToggleLineComment },
          { type: 'separator' },
          { label: 'Zoom In', role: 'zoomIn' },
          { label: 'Zoom Out', role: 'zoomOut' }
        ]
      },
      {
        label: 'Selection',
        submenu: [
            { label: 'Select All', role: 'selectAll' },
            { type: 'separator' },
            { label: 'Copy Line Up', click: onCopyLineUp },
            { label: 'Copy Line Down', click: onCopyLineDown },
            { type: 'separator'},
            { label: 'Move Line Up', click: onMoveLineUp },
            { label: 'Move Line Down', click: onMoveLineDown },
        ]
      },
      {
        label: 'View',
        submenu: [
            { label: 'Command Palette', click: onCommandPalette },
            { label: 'Search', click: onSearch },
            { label: 'Terminal', click: onTerminal }
        ]
      },
      {
        label: 'Terminal',
        submenu: [
            { label: 'New Terminal', click: onNewTerminal },
            { label: 'New Task', click: onNewTask }
        ]
      },
      {
        label: 'Help',
        submenu: [
            { label: 'Welcome', click: onWelcome },
            { label: 'Show all commands', click: onShowAllCommands },
            { label: 'Documentation', click: onDocumentation },
            { label: 'Restart to Update', click: onRestartUpdate },
            { label: 'About', click: onAbout }
        ]
      }
    ]
}

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
    console.log("Hey you clicked on close window");
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

function onToggleLineComment(){
    console.log("Hey you clicked on toggle line comment")
}

/**
 * Event handlers for Selection submenu
 */

function onCopyLineUp(){
    console.log("You clicked on copy line up")
}

function onCopyLineDown(){
    console.log("You clicked on copy line down")
}

function onMoveLineUp(){
    console.log("You clicked on move line up")
}

function onMoveLineDown(){
    console.log("You clicked on move line down")
}

/**
 * Event Handlers for View submenu.
 */
function onCommandPalette(){
    console.log("You clicked on command palette");
}

function onSearch(){
    console.log("You clicked on search");
}

function onTerminal(){
    console.log("You clicked on terminal");
}

/**
 * Event Handlers for Terminal submenu.
 */
function onNewTerminal(){
    console.log("You clicked on terminal");
}

function onNewTask(){
    console.log("You clicked on new task");
}

/**
 * Event Handlers for Help submenu.
 */
function onWelcome(){
    console.log("You clicked on welcome");
}

function onShowAllCommands(){
    console.log("You clicked on show all commands");
}

function onDocumentation(){
    console.log("You clicked on documentation");
}

function onRestartUpdate(){
    console.log("You clicked on restart to update");
}

function onAbout(){
    console.log("You clicked on about");
}

module.exports = {createMenu};