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

ymaps.ready(init);
function init() {
  var myMap = new ymaps.Map(
      "map",
      {
        center: [7.89076, 98.294729],
        zoom: 17,
      },
      {
        searchControlProvider: "yandex#search",
      }
    ),
    // Создаем геообъект с типом геометрии "Точка".
    myGeoObject = new ymaps.GeoObject(),
    myPieChart = new ymaps.Placemark();

  myMap.geoObjects
    .add(myGeoObject)
    .add(myPieChart)
    .add(
      new ymaps.Placemark(
        [7.89076, 98.294729],
        {
          balloonContent: "Wellcome to our hotel!",
          iconCaption: "GRAND HILTON HOTEL",
        },
        {
          preset: "islands#greenDotIconWithCaption",
        }
      )
    );
}
