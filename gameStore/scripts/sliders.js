const cardItemThumbs1 = new Swiper(".product__preview-thumbs", {
  spaceBetween: 15,
  slidesPerView: 4,
  watchOverflow: true
});
const cardItemPreviewSlider1 = new Swiper(".product__preview-slider", {
  spaceBetween: 15,
  watchOverflow: true,
  grabCursor: true,
  thumbs: {
    swiper: cardItemThumbs1,
    slideThumbActiveClass: "active"
  }
});
