const slide_thumbnail = new Swiper(".main-slide-thumbnail", {
  slidesPerView: 5,
  direction: "vertical",
  spaceBetween: 20,
  watchSlidesProgress: true,
});

const slide_hero = new Swiper(".main-slide", {
  effect: "fade",
  thumbs: {
    swiper: slide_thumbnail,
  },
  autoplay: {
    delay: 5000,
    disabledOnInteraction: false,
  },
});

const tabNavigation = document.querySelectorAll(".tab-navigation li button");
const tabGames = document.querySelectorAll(".tab-pane-games");

tabNavigation.forEach((filter, index) => {
  filter.addEventListener("click", () => {
    tabNavigation.forEach((item) => {
      item.classList.remove("active");
      tabGames.forEach((item) => {
        item.classList.remove("active");
      });

      tabGames[index].classList.add("active");
      filter.classList.add("active");
    });
  });
});
