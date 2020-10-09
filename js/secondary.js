$(document).ready(function () {
  var menuButton = $(".menu-button");
  menuButton.on("click", function () {
    $(".navbar-bottom").toggleClass("navbar-bottom__mobile--visible");
  });

});
