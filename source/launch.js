import { app, BrowserWindow, screen } from 'electron';

app.whenReady().then(launch);

async function launch() {
    let displays = screen.getAllDisplays();
    
    for (let display of displays) {
        let {x, y, width, height} = display.bounds;
        let settings = {
            x, y, width, height,
            show: false,
            frame: false,
            focusable: false,
            type: 'desktop'
        }
    
        let window = new BrowserWindow(settings);
    
        window.loadFile('./source/interface/desktop.html');
        window.once('ready-to-show', () => window.show());
    }
}