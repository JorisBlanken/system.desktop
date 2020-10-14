import { app, BrowserWindow, screen } from "electron";

app.whenReady().then(launch);

async function launch() {
    let primary = screen.getPrimaryDisplay();

    let window = new BrowserWindow({
        x: primary.bounds.x,
        y: primary.bounds.y,
        width: primary.bounds.width,
        height: primary.bounds.height,
        show: false,
        frame: false,
        focusable: false
    });

    window.loadURL('file:///home/joris/source/desktop/index.html');
    window.once('ready-to-show', () => window.show());
}