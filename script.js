const time = document.querySelector(".time");
const date = document.querySelector(".date");
const blackBox = document.querySelector(".black-box");

const searchBarInput = document.querySelector(".search-bar-input");

searchBarInput.addEventListener("mouseleave", (e) => {
  e.target.value = "";
  e.target.blur();
});

const tick = () => {
  const hours =
    new Date().getHours() < 10
      ? "0" + new Date().getHours()
      : new Date().getHours();

  const minutes =
    new Date().getMinutes() < 10
      ? "0" + new Date().getMinutes()
      : new Date().getMinutes();

  const day =
    new Date().getDate() < 10
      ? "0" + new Date().getDate()
      : new Date().getDate();

  const month = new Date().toLocaleString(undefined, { month: "long" });

  const year = new Date().getFullYear().toString().substr(-2);

  time.innerHTML = `${hours}:${minutes}`;
  date.innerHTML = `${day} | ${month} | ${year}`;
};

function toggleFullScreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }
}

document.addEventListener("keydown", (e) => {
  if (e.key == "F11") {
    e.preventDefault();
    toggleFullScreen();
  }
});

document.addEventListener("fullscreenchange", (e) => {
  if (document.fullscreenElement) {
    blackBox.style.transform = " scaleY(1) translateX(50%)";
  } else {
    blackBox.style.transform = " scaleY(0) translateX(50%)";
  }
});

tick();

setInterval(tick, 60000);
