const time = document.querySelector(".time");
const date = document.querySelector(".date");
const blackBox = document.querySelector(".black-box");

const searchBarInput = document.querySelector(".search-bar-input");

const clearSearchBar = () => {
  searchBarInput.value = "";
  searchBarInput.blur();
};

document.onclick = (e) => e.target !== searchBarInput && clearSearchBar();
searchBarInput.onmouseleave = clearSearchBar;

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

const toggleFullScreen = () => {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }
};

const searchBarFocus = (e) => {
  searchBarInput === document.activeElement
    ? clearSearchBar()
    : searchBarInput.focus();
};

document.addEventListener("keydown", (e) => {
  if (e.key == "F11") {
    e.preventDefault();
    toggleFullScreen();
  }

  if (e.key == "/") {
    e.preventDefault();
    searchBarFocus(e);
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
