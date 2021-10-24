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

let learnBTN = document.querySelector(".learn-btn");

learnBTN.addEventListener("click", function () {
  alert("This Website Is In Under Construction & Managed By DhavalAhir");
});

let downloadICON = document.querySelector(".download-icon");

function dndICON() {
  alert("Soon Updated Download Icons");
}

downloadICON.addEventListener("click", dndICON);
