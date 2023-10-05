// SLIDER IN THE SECTION-HEADER
const slider = function () {
  const slides = document.querySelectorAll(".slide");
  const btnLeft = document.querySelector(".slider__btn--left");
  const btnRight = document.querySelector(".slider__btn--right");
  const dotContainer = document.querySelector(".dots");

  let curSlide = 0;
  const maxSlide = slides.length;

  // FUNTIONS TO CREATE DOTS
  const createDots = function () {
    slides.forEach(function (_, i) {
      dotContainer.insertAdjacentHTML(
        "beforeend",
        `<button class="dots__dot" data-slide="${i}"></button>`
      );
    });
  };

  const activateDot = function (slide) {
    document
      .querySelectorAll(".dots__dot")
      .forEach((dot) => dot.classList.remove("dots__dot--active"));

    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add("dots__dot--active");
  };

  const goToSlide = function (slide) {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
  };

  // Next slide
  const nextSlide = function () {
    if (curSlide === maxSlide - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }

    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const prevSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide - 1;
    } else {
      curSlide--;
    }
    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const init = function () {
    goToSlide(0);
    setInterval(nextSlide, 3000);
    createDots();

    activateDot(0);
  };
  init();

  btnRight.addEventListener("click", nextSlide);
  btnLeft.addEventListener("click", prevSlide);

  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") prevSlide();
    e.key === "ArrowRight" && nextSlide();
  });

  dotContainer.addEventListener("click", function (e) {
    if (e.target.classList.contains("dots__dot")) {
      const { slide } = e.target.dataset;
      goToSlide(slide);
      activateDot(slide);
    }
  });
};
const haveSlide = document.querySelector(".section-slider");
if (haveSlide) slider();

// POPUP MENU
let popup = document.getElementById("popup");
let lines = Array.from(popup.getElementsByClassName("line"));

lines.forEach((line, index) => {
  line.style.setProperty("--line-index", index);
});

let buttonShow = document.getElementById("show-popup");
buttonShow.addEventListener("click", () => {
  popup.style.display = "inline-block";
});

let buttonClose = document.getElementById("close-popup");
buttonClose.addEventListener("click", () => {
  popup.style.display = "none";
});

// FIXED MENU
const headerItem = document.querySelector(".section-header");
const onlyHeader = document.querySelector(".header");
const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    if (!ent.isIntersecting)
      document.querySelector(".row .leftcolumn-menu").classList.add("sticky");

    if (ent.isIntersecting)
      document
        .querySelector(".row  .leftcolumn-menu")
        .classList.remove("sticky");
  },
  {
    // FOR THE VIEW PORT
    root: null,
    threshold: 0,
    rootMargin: "0px",
  }
);

if (headerItem) obs.observe(headerItem);
else obs.observe(onlyHeader);
