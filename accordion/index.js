(function() {
  var wrapper = document.getElementsByClassName('accordion-wrapper')[0];
  console.log(wrapper)

  wrapper.addEventListener("click", function(e) {
    console.log('*************', e.target.parentElement);
    e.target.parentElement.classList.toggle('active');
  });

})();