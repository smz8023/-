import { ipcMain } from 'electron'
import {startRecord, stopCapture} from './portaudio.js'
export function startFfmpeg(win: Electron.BrowserWindow) {
  console.log('startFfmpeg....');
  
  ipcMain.handle('start', (event: Electron.IpcMainInvokeEvent, item) => {
   
    console.log('event---event', event);
    console.log('item---item', item);
    startRecord()
    if (item.id === 1) {

    } else if (item.id === 2) {
      stopCapture()
    }
    
    // event.sender.send('update-error', { message: error.message, error })
  })

  

  
  
}