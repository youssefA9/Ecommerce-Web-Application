const switchers = [...document.querySelectorAll(".switcher")];

switchers.forEach((item) => {
  item.addEventListener("click", function () {
    switchers.forEach((item) =>
      item.parentElement.classList.remove("is-active")
    );
    this.parentElement.classList.add("is-active");
  });
});

function showAccessScreen() {
  const element = document.querySelector("#login-modal");

  if (element.style.display == "inline") {
    element.style.display = "none";
    document.querySelector("#profile-button").style.display = "flex";
    document.querySelector("#exit-button").style.display = "none";
    document.querySelector("body").style.overflowY = "visible";
  } else {
    element.style.display = "inline";
    document.querySelector("#profile-button").style.display = "none";
    document.querySelector("#exit-button").style.display = "flex";
    document.querySelector("body").style.overflowY = "hidden";
  }
}
