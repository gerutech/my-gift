/*Слайдер миниатюр */
const swiperThumb = new Swiper(".gift__swiper_thumb", {
  spaceBetween: 12,
  breakpoints: {
    1140: {
      spaceBetween: 16,
    },
  },
  slidesPerView: "auto",
  freeMode: true,
  watchSlidesProgress: true,
});
/*Основной слайдер */
const swiperMain = new Swiper(".gift__swiper_card", {
  spaceBetween: 16,
  thumbs: {
    swiper: swiperThumb,
  },
});
