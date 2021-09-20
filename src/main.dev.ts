/* eslint global-require: off, no-console: off */

/**
 * This module executes inside of electron's main process. You can start
 * electron renderer process from here and communicate with the other processes
 * through IPC.
 *
 * When running `yarn build` or `yarn build-main`, this file is compiled to
 * `./src/main.prod.js` using webpack. This gives us some performance wins.
 */
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import path from 'path';
import { app, BrowserWindow, shell, ipcMain, ipcRenderer } from 'electron';
import { autoUpdater } from 'electron-updater';
import log from 'electron-log';
import MenuBuilder from './menu';

export default class AppUpdater {
  constructor() {
    log.transports.file.level = 'info';
    autoUpdater.logger = log;
    autoUpdater.checkForUpdatesAndNotify();
  }
}

let mainWindow: BrowserWindow | null = null;
let loginWindow: BrowserWindow | null = null;
let captchaWindow: BrowserWindow | null = null;
let key="1111-1111-1111";

if (process.env.NODE_ENV === 'production') {
  const sourceMapSupport = require('source-map-support');
  sourceMapSupport.install();
}

if (
  process.env.NODE_ENV === 'development' ||
  process.env.DEBUG_PROD === 'true'
) {
  require('electron-debug')();
}

const installExtensions = async () => {
  const installer = require('electron-devtools-installer');
  const forceDownload = !!process.env.UPGRADE_EXTENSIONS;
  const extensions = ['REACT_DEVELOPER_TOOLS'];

  return installer
    .default(
      extensions.map((name) => installer[name]),
      forceDownload
    )
    .catch(console.log);
};

const createWindow = async () => {
  if (
    process.env.NODE_ENV === 'development' ||
    process.env.DEBUG_PROD === 'true'
  ) {
    await installExtensions();
  }

  const RESOURCES_PATH = app.isPackaged
    ? path.join(process.resourcesPath, 'resources')
    : path.join(__dirname, '../resources');

  const getAssetPath = (...paths: string[]): string => {
    return path.join(RESOURCES_PATH, ...paths);
  };

  mainWindow = new BrowserWindow({
    show: false,
    width: 1150,
    height: 720,
    // minWidth: 1024,
    // minHeight: 768,
    resizable:false,
    frame: false,
    transparent: true,
    center: true,
    icon: getAssetPath('icon.png'),
    webPreferences: (process.env.NODE_ENV === 'development' ||
      process.env.E2E_BUILD === 'true') &&
      process.env.ERB_SECURE !== 'true'
    ? {
      nodeIntegration: true,
      // devTools:false
      }
    : {
        preload: path.join(__dirname, 'dist/renderer.prod.js'),
      },
  });

  //Disable Window menu
  mainWindow.setMenu(null);
  mainWindow.loadURL(`file://${__dirname}/index.html`);

  // @TODO: Use 'ready-to-show' event
  //        https://github.com/electron/electron/blob/master/docs/api/browser-window.md#using-ready-to-show-event
  mainWindow.webContents.on('did-finish-load', () => {
    if (!mainWindow) {
      throw new Error('"mainWindow" is not defined');
    }
    if (process.env.START_MINIMIZED) {
      mainWindow.minimize();
    } else {
      mainWindow.show();
      mainWindow.focus();
    }
  });

  mainWindow.on('closed', () => {
    mainWindow = null;
  });

  const menuBuilder = new MenuBuilder(mainWindow);
  menuBuilder.buildMenu();

  // Open urls in the user's browser
  mainWindow.webContents.on('new-window', (event, url) => {
    event.preventDefault();
    shell.openExternal(url);
  });

  // Remove this if your app does not use auto updates
  // eslint-disable-next-line
  new AppUpdater();
};


const createLoginWindow = async () => {

  if (
    process.env.NODE_ENV === 'development' ||
    process.env.DEBUG_PROD === 'true'
  ) {
    await installExtensions();
  }

  loginWindow = new BrowserWindow({
    show: false,
    width: 810,
    height: 490,
    frame:false,
    resizable:false,
    transparent: true,
    webPreferences:
      (process.env.NODE_ENV === 'development' ||
        process.env.E2E_BUILD === 'true') &&
      process.env.ERB_SECURE !== 'true'
        ? {
          nodeIntegration: true,
          contextIsolation:false,
          devTools:true
        }
        : {
          preload: path.join(__dirname, 'dist/renderer.prod.js'),
        },
  });

  loginWindow.setMenu(null);
  loginWindow.loadURL(`file://${__dirname}/index.html#/auth`);

  // @TODO: Use 'ready-to-show' event
  //        https://github.com/electron/electron/blob/master/docs/api/browser-window.md#using-ready-to-show-event
  loginWindow.webContents.on('did-finish-load', () => {
    if (!loginWindow) {
      throw new Error('LoginWindow is not defined');
    }
    if (process.env.START_MINIMIZED) {
      loginWindow.minimize();
    } else {
      loginWindow.show();
      loginWindow.focus();
    }
  });

  loginWindow.on('closed', () => {
    loginWindow = null;
  });

  const menuBuilder = new MenuBuilder(loginWindow);
  menuBuilder.buildMenu();

  // Remove this if your app does not use auto updates
  // eslint-disable-next-line
  new AppUpdater();
}

const createCaptchaWindow = async () => {

  if (
    process.env.NODE_ENV === 'development' ||
    process.env.DEBUG_PROD === 'true'
  ) {
    await installExtensions();
  }

  captchaWindow = new BrowserWindow({
    show: false,
    width: 500,
    height: 800,
    minHeight: 800,
    minWidth: 500,
    maxHeight: 800,
    maxWidth: 500,
    frame:false,
    transparent: false,
    webPreferences:
      (process.env.NODE_ENV === 'development' ||
        process.env.E2E_BUILD === 'true') &&
      process.env.ERB_SECURE !== 'true'
        ? {
          nodeIntegration: true,
          devTools:true
        }
        : {
          preload: path.join(__dirname, 'dist/renderer.prod.js'),
        },
  });

  captchaWindow.setMenu(null);
  captchaWindow.loadURL(`file://${__dirname}/index.html#/captcha`);

  // @TODO: Use 'ready-to-show' event
  //        https://github.com/electron/electron/blob/master/docs/api/browser-window.md#using-ready-to-show-event
  captchaWindow.webContents.on('did-finish-load', () => {
    if (!captchaWindow) {
      throw new Error('LoginWindow is not defined');
    }
    if (process.env.START_MINIMIZED) {
      captchaWindow.minimize();
    } else {
      captchaWindow.show();
      captchaWindow.focus();
    }
  });

  captchaWindow.on('closed', () => {
    captchaWindow = null;
  });

  const menuBuilder = new MenuBuilder(captchaWindow);
  menuBuilder.buildMenu();

  // Remove this if your app does not use auto updates
  // eslint-disable-next-line
  new AppUpdater();
}

/**
 * Add event listeners...
 */

app.on('window-all-closed', () => {
  // Respect the OSX convention of having the application in memory even
  // after all windows have been closed
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

if (process.env.E2E_BUILD === 'true') {
  // eslint-disable-next-line promise/catch-or-return
  app.whenReady().then(createWindow);
} else {
  app.on('ready', async () => {
    await auth();
  });
}

const auth = async () => {
  // let setting = await getUserFromLocalStorage();
  let auth_status = false;
  if(auth_status) {
    console.log("auth status", auth_status);
    await  createWindow()
  }
  else {
    console.log("auth status", auth_status);
    await  createLoginWindow()
  }
};


ipcMain.on('activated', async (_event, data) => {
  if(key===data){
    loginWindow?.webContents.send('correct','correct');
  }
});

ipcMain.on('mainPage', async ()=>{
  await createWindow();
  if(loginWindow) {
    loginWindow.close();
    loginWindow = null;
  }
});

ipcMain.on('captcha', async () => {
  if (captchaWindow === null) await createCaptchaWindow();
});

ipcMain.on('captcha-quite', () => {
  if(captchaWindow) captchaWindow.close();
});

ipcMain.on('quit-app', () => {
  console.log("app quit--background");
  app.quit()

});


ipcMain.on('hide-app', () => {
  if(mainWindow) {
    mainWindow.hide();
  }
  if(loginWindow) {
    loginWindow.hide();
  }
});

ipcMain.on('minimize-app', () => {
  if(mainWindow) {
    mainWindow.minimize();
  }
});

ipcMain.on('minimize-captcha', () => {
  if(captchaWindow) captchaWindow.minimize();
});

app.on('activate', async () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  // if (mainWindow === null) createWindow();

  if (BrowserWindow.getAllWindows().length === 0) {
    await createLoginWindow();
  }
});
