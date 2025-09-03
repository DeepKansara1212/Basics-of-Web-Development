const start = document.querySelector("#start");
const stop = document.querySelector("#stop");

// rgb(243, 12, 45)

function random() {
  return Math.floor(Math.random() * 256);
}

function colorGenerator() {
  return `rgb(${random()}, ${random()}, ${random()})`;
  // console.log(randomColor);
}

let intervalId;

start.addEventListener("click", () => {
    if(!intervalId) {
        intervalId = setInterval(() => {
            document.body.style.backgroundColor = colorGenerator();
        }, 1000);
    }
});

stop.addEventListener("click", () => {
  clearInterval(intervalId);
  intervalId = null
});
