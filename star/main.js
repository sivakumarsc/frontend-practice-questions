window.addEventListener("load", function() {
	const stars = document.getElementsByTagName("li");
  const starContainer = document.getElementsByClassName("rating-container")[0];
  let active = -1;
  
  starContainer.addEventListener("click", function(el) {
  	if (el.target.dataset.id) {
    	let currentIndex = el.target.dataset.id;
      active = currentIndex - 1;
      
      for(let i=0; i<stars.length; i+=1) {
      	if (i <= currentIndex - 1) {
        	stars[i].classList.add("active");
        } else {
        	stars[i].classList.remove("active");
        }
      }
    }
  });
  starContainer.addEventListener("click", function(el) {
  	if (el.target.dataset.id) {
    	let currentIndex = el.target.dataset.id;
      
      for(let i=0; i<stars.length; i+=1) {
      	if (i <= currentIndex - 1) {
        	stars[i].classList.add("active");
        } else {
        	stars[i].classList.remove("active");
        }
      }
    }
  });
  starContainer.addEventListener("mouseover", function(el) {
  	if (el.target.dataset.id) {
    	let currentIndex = el.target.dataset.id;
      for(let i=0; i<stars.length; i+=1) {
      	if (i <= currentIndex - 1) {
        	stars[i].classList.add("active");
        } else {
        	stars[i].classList.remove("active");
        }
      }
    }
  });
  starContainer.addEventListener("mouseleave", function(el) {
      
      for(let i=0; i<stars.length; i+=1) {
      	if (i <= active) {
        	stars[i].classList.add("active");
        } else {
        	stars[i].classList.remove("active");
        }
      }
  });
});