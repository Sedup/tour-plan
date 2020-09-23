var hotelSlider = new Swiper(".hotel-slider", {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: ".hotel-slider__button--next",
    prevEl: ".hotel-slider__button--prev",
  },
  effect: "coverflow",
  keyboard: {
    enebled: true,
  },
});

var reviewsSlider = new Swiper(".reviews-slider", {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: ".reviews-slider__button--next",
    prevEl: ".reviews-slider__button--prev",
  },
  keyboard: {
    enebled: true,
  },
});


// Initialize and add the map
function initMap() {
  // The location of Hotel
  var hotel = { lat: 7.890760, lng: 98.294729 };
  // The map, centered at Hotel
  var map = new google.maps.Map(
    document.getElementById('map'), { zoom: 17, center: hotel });
  // The marker, positioned at hotel
  var marker = new google.maps.Marker({ position: hotel, map: map });
}
