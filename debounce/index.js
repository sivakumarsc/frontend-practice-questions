window.addEventListener("load", function (){
  const textBox = document.getElementById("text-box");
  let timerId = null;

  function debounce(callback, delay) {
    if (timerId) {
      clearTimeout(timerId);
    }

    timerId = setTimeout(() => {
      callback(arguments[2])
    }, delay);
  }

  function printVal(e) {
    console.log('********************', e.target.value);
  }

  textBox.addEventListener("keypress", function(e){
    debounce(printVal, 200, e);
  });


});