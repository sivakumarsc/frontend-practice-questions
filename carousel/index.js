window.addEventListener("load", function() {
  console.log('****** loaded ****');

  let currentIndex = 0;
  const prevButton = document.getElementsByClassName('prev')[0];
  const nextButton = document.getElementsByClassName('next')[0];
  const carouselWrapper = document.getElementsByClassName('carousel-item-wrapper')[0];
  const totalItems = carouselWrapper.children.length;
  const percent = 100/totalItems;
  console.log(totalItems);

  function handlePrevClick() {
    slideTo(currentIndex - 1);
  }

  function handleNextClick() {
    slideTo(currentIndex + 1);
  }

  function slideTo(index) {
    let slideIndex = index;

    if (index < 0) {
      slideIndex = totalItems - 1;
    } else if(index >= carouselWrapper.children.length) {
      slideIndex = 0;
    }
    carouselWrapper.style.transform = `translate(-${slideIndex*percent}%, 0)`;
    currentIndex = slideIndex;
  }

  prevButton.addEventListener("click", handlePrevClick);
  nextButton.addEventListener("click", handleNextClick);

});