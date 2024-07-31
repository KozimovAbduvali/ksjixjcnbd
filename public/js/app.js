const swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  pagination: {
    el: ".swiper-paginati",
    clickable: true,
  },
  navigation: {
    nextEl: ".next",
    prevEl: ".prev",
  },
  breakpoints: {
    320: {
      slidesPerView: 2.5,
      spaceBetween: 20,
    },
    640: {
      slidesPerView: 3.5,
      spaceBetween: 25,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 30,
    },
  },
});
