
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

function showCartIcon(){
  const element = document.querySelector("#cart-button");

  element.style.display = "flex";
}

function addToCart(event) {
  event.preventDefault();

  const form = event.target;
  const productId = $(form).find("[name=productId]").val();
  const actionURL = form.action;

  $.ajax({
    type: "POST",
    url: actionURL,
    data: { productId },
    success: function (data) {},
  });
}


$(document).ready(function () {
  if (!$.browser.webkit) {
      $('.wrapper').html('<p>Sorry! Non webkit users. :(</p>');
  }
});