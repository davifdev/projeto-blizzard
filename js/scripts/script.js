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

const btnLogin = document.querySelector(".btn-login");
const btnClose = document.querySelector(".btn-close");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");

function openAndCloseModal() {
  modal.classList.toggle("active");
}

btnLogin.addEventListener("click", openAndCloseModal);
btnClose.addEventListener("click", openAndCloseModal);
overlay.addEventListener("click", openAndCloseModal);
document.addEventListener("keydown", (e) => {
  if (modal.classList.contains("active")) {
    if (e.key === "Escape") {
      openAndCloseModal();
    }
  }
});

const btnMenu = document.querySelectorAll(".js-btn-menu");
const jsMenu = document.querySelectorAll(".js-menu");

btnMenu.forEach((btn, index) => {
  btn.addEventListener("click", (event) => {
    event.preventDefault();

    jsMenu.forEach((item) => {
      item.classList.remove("active");
      item.addEventListener("mouseleave", () => {
        item.classList.remove("active");
         btnMenu.forEach((item) => item.classList.remove("active"));
      });
    });

    btnMenu.forEach((item) => item.classList.remove("active"));

    btn.classList.add("active");
    jsMenu[index].classList.add("active");
  });
});
