const clock = document.querySelector('h2#clock')


function getClock() {
    const date = new Date();
    const hrs = String(date.getHours()).padStart(2, '0');
    const min = String(date.getMinutes()).padStart(2, '0');
    const sec = String(date.getSeconds()).padStart(2, '0');
    clock.innerText = `${hrs}:${min}:${sec}`;
}

getClock()
// setTimeout(getClock, 0);
setInterval(getClock, 1000);
