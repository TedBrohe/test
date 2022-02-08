const images = [
    '0.jpg',
    '1.jpg',
    '2.jpg',
    '3.jpg',
    '4.jpg',
    '5.jpg',
    '6.jpg',
    '7.jpg',
    '8.jpg',
    '9.jpg'
]

function init(){
    const chosenImage = images[Math.floor(Math.random() * images.length)];
    const bgImage = document.createElement('img');
    bgImage.src = `img/${chosenImage}`
    bgImage.classList.add('bgimage');

    const now = Date.now();
    bgImage.classList.add(now);

    document.body.appendChild(bgImage)
}

function delold(){
    const oldbgimage = document.querySelectorAll(".bgimage")
    if (oldbgimage.length >= 2) {
        document.body.removeChild(oldbgimage[0]);
    }
}

init()
setInterval(init, 60000);
setTimeout(()=>setInterval(delold, 60000), 10000);
