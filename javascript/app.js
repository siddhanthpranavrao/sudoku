let inputs = document.querySelectorAll("input");
let minutes = document.querySelector(".min");
let seconds = document.querySelector(".sec");
let reset = document.querySelector(".btn-green");
let stop = document.querySelector(".btn-red");
let remSize = 2;
let min = 0;
let sec = 0;
flag = true;

reset.addEventListener("click", function () {
    sec = 0;
    min = 0;
    minutes.textContent = `00`;
    seconds.textContent = `00`;
});

stop.addEventListener("click", function () {
    if (stop.textContent === "Stop") {
        flag = false;
        stop.textContent = "Start";
    } else {
        flag = true;
        stop.textContent = "Stop";
    }

});

setInterval(function () {
    if (flag) {
        if (sec === 59) {
            min = parseInt(min) + 1;
            sec = '00';
            minutes.textContent = min;
            seconds.textContent = sec;
        } else {
            sec = parseInt(sec) + 1;
            if (sec >= 0 & sec <= 9) {
                sec = `0${sec}`;
            }
            seconds.textContent = sec;
        }
    }

}, 1000);

for (let input of inputs) {
    input.addEventListener("keyup", function (event) {
        if (event.which !== 8 && event.which !== 37 && event.which !== 38 && event.which !== 39 && event.which !== 40) {
            if (this.value.length > 2) {
                remSize -= 0.35;
                this.style.fontSize = remSize <= 0.7 ? `0.7rem` : `${remSize}rem`;
            }
        } else if (event.which === 8) {
            if (this.value.length <= 2) {
                remSize = 2;
                this.style.fontSize = `${remSize}rem`;
            } else {
                remSize += 0.35;
                this.style.fontSize = `${remSize}rem`;
            }
        }
    })
}