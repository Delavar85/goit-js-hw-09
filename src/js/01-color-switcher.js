const refs = {
    btnStart: document.querySelector('[data-start]'),
    btnStop: document.querySelector('[data-stop]'),
    body:document.querySelector('body'),
}

const DELAY = 1000;

refs.btnStart.addEventListener('click', onStart);

refs.btnStop.addEventListener('click', onStop);

refs.btnStop.disabled = true;
let intervelId = null;
function onStart() {
    
    refs.btnStart.disabled = true;
    refs.btnStop.disabled = false;
    changeColor()

}

function onStop() {
    refs.btnStop.disabled = true;
    refs.btnStart.disabled = false;
    clearInterval(intervelId);
}

function changeColor() {
     intervelId = setInterval(() => {
        let color = getRandomHexColor();
        refs.body.style.background= color
    },DELAY)
}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    
}