$(document).ready(function () {
  $("#navmain").fadeOut();
  $(window).scroll(() => {
    var scroll = $(window).scrollTop();
    var objectSelect = $("#services");
    var objectPosition = objectSelect.offset().top;

    if (scroll > objectPosition - 80) {
      $("#navmain").fadeIn();
    } else {
      $("#navmain").fadeOut();
    }
  });
});

var nav = document.getElementById("navbar");
var navlink = document.getElementsByClassName("nav-link");

for (var i = 0; i < navlink.length; i++) {
  navlink[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active1");
    current[0].className = current[0].className.replace(" active1", "");
    this.className += " active1";
  });
}
