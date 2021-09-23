let showMenu = true;

document.querySelector(".nav-btn").addEventListener("click", function () {
  document.querySelector(".navbar-slider").classList.toggle("nav_display_none");
});

// navbar slider display none Javascript
document
  .querySelector(".close-wrapper-btn")
  .addEventListener("click", function () {
    document
      .querySelector(".navbar-slider")
      .classList.toggle("slider_display_none");
  });
