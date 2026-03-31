// Generate a random color in hexadecimal format
const randomColor = function() {
    const hex = "0123456789ABCDEF";
    let color = "#";

    for(let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
}

// console.log(randomColor());
let colorInterval;
const startChangingColor = function() {
    function changeColor() {
        document.body.style.backgroundColor = randomColor();
    }

    if(!colorInterval) {
        colorInterval =setInterval(changeColor, 1000);
    }
    
}

const stopChangingColor = function() {
    clearInterval(colorInterval);
    colorInterval = null;   // for optimising
}

document.querySelector("#start").addEventListener("click", startChangingColor);

document.querySelector("#stop").addEventListener("click", stopChangingColor);