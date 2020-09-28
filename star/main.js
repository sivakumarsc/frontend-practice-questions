window.addEventListener("load", function() {
  document.getElementById('star-wrapper').addEventListener("click", function(e) {
    const targetId = e.target.id;
    let stars = document.getElementsByClassName('star');
    for (let i=0; i<stars.length; i+=1) {
      if (i <= targetId) {
        stars[i].classList.add('rated');
      } else {
        stars[i].classList.remove('rated');
      }
    }
    console.log(targetId);
  });
});
