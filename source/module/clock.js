const time = document.querySelector('#time');
const date = document.querySelector('#date');

requestAnimationFrame(update);

export function update() {
    const now = new Date();
    time.innerText = now.toLocaleString('default', { timeStyle: 'short' });
    date.innerText = now.toLocaleString('default', { dateStyle: 'long' });

    requestAnimationFrame(update);
}