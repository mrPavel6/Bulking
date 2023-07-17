
const slides = document.querySelectorAll('.swiper__slide')
const swiperButtonPrev = document.querySelector('.swiper__button__prev')
const swiperButtonNext = document.querySelector('.swiper__button__next')
const bullet = document.querySelectorAll('.swiper__bullet')
const bulletWrapper = document.querySelector('.swiper__pagination')
const swiperWrapper = document.querySelector('.swipper__wrapper')
function swiperFunc() {
    slides.forEach((slide, index) => {
      if (index !== 0) slide.classList.add("swiper__hidden");
      //index for slide
      slide.dataset.index = index;
      slides[0].setAttribute("data-active", "");
    });
    swiperButtonPrev.addEventListener("click", () => {
      showNextSlide("next");

    });
    swiperButtonNext.addEventListener("click", () => {
      showNextSlide("prev");
    });
    function showNextSlide(direction) {
      const currentSlide = swiperWrapper.querySelector("[data-active]");
      const curenSlideIndex = +currentSlide.dataset.index;
      currentSlide.classList.add("swiper__hidden");
      currentSlide.removeAttribute("data-active");
      //next index
      let nextSlideIndex;
      if (direction === "prev") {
        nextSlideIndex =
          curenSlideIndex + 1 === slides.length ? 0 : curenSlideIndex + 1;
      } else if (direction === "next") {
        nextSlideIndex =
          curenSlideIndex === 0 ? slides.length - 1 : curenSlideIndex - 1;
      }
      //next slide
      const nextSlide = swiperWrapper.querySelector(
        `[data-index='${nextSlideIndex}']`
      );
      nextSlide.classList.remove("swiper__hidden");
      nextSlide.setAttribute("data-active", "");

    }
  }
  swiperFunc();
  function bulletFunc() {
    bullet.forEach((slide, index) => {
      if (index !== 0) slide.classList.add("bullet__hidden");
      //index for slide
      slide.dataset.index = index;
      bullet[0].setAttribute("data-bullet", "");
    });
    swiperButtonPrev.addEventListener("click", () => {
      showNextSlide("next");

    });
    swiperButtonNext.addEventListener("click", () => {
      showNextSlide("prev");
    });
    function showNextSlide(directions) {
      const currentSlide = bulletWrapper.querySelector("[data-bullet]");
      const curenSlideIndex = +currentSlide.dataset.index;
      currentSlide.classList.add("bullet__hidden");
      currentSlide.removeAttribute("data-bullet");
      //next index
      let nextSlideIndex;
      if (directions === "prev") {
        nextSlideIndex =
          curenSlideIndex + 1 === bullet.length ? 0 : curenSlideIndex + 1;
      } else if (directions === "next") {
        nextSlideIndex =
          curenSlideIndex === 0 ? bullet.length - 1 : curenSlideIndex - 1;
      }
      //next slide
      const nextSlide = bulletWrapper.querySelector(
        `[data-index='${nextSlideIndex}']`
      );
      nextSlide.classList.remove("bullet__hidden");
      nextSlide.setAttribute("data-bullet", "");

    }
  }
  bulletFunc()
  swiperFunc();