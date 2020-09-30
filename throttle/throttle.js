window.addEventListener("load", function() {
  const wrapper = document.getElementsByClassName('wrapper')[0];
  let timerId = null;

  function throttle(callback, delay) {
    if (timerId) {
      return;
    }

    timerId = setTimeout(function() {
      callback();

      clearTimeout(timerId);
      // After clearTimeout also, we will have timerId. So, explicitly making it as null.
      timerId = null;
    }, delay);
  }

  function handleScroll() {
    console.log('*****************************');
  }


  wrapper.addEventListener("scroll", function() {
    throttle(handleScroll, 500);  
  });
});