window.addEventListener("load", function() {
  let circle = document.getElementsByClassName('outer-circle')[0];

  function createNumbers() {
    let fragment = document.createDocumentFragment();
    let deg = 0;
    for(let i=0; i<12; i+=1) {
      let div = document.createElement('div');
      div.classList.add('numbers');
      deg += 30;
      div.style.transform = `translate(-50%, -50%)rotate(${deg}deg)`;
      
      let num = document.createElement('div');
      num.textContent = i + 1;
      num.style.transform = `rotate(-${deg}deg)`;
      div.appendChild(num);
      fragment.appendChild(div);
    }
    circle.appendChild(fragment);
  }

  function drawHands(handType) {
    let hand = document.createElement('div');
    hand.classList.add('hand', handType);
    circle.appendChild(hand);
  }

  function setCurrentTime() {
    let date = new Date();
    let sec = date.getSeconds() / 60;
    let min = (date.getMinutes() + sec) / 60;
    let hour = (date.getHours() + min) / 12;

    let hourHand = document.getElementsByClassName('hour')[0];
    let minuteHand = document.getElementsByClassName('minute')[0];
    let secondHand = document.getElementsByClassName('second')[0];

    console.log(hour, min, sec);

    hourHand.style.transform = "rotate(" + (hour * 360) + "deg)";
    minuteHand.style.transform = "rotate(" + (min * 360) + "deg)";
    secondHand.style.transform = "rotate(" + (sec * 360) + "deg)";
  }

  createNumbers();
  drawHands('second');
  drawHands('minute');
  drawHands('hour');
  setCurrentTime();
  setInterval(setCurrentTime, 1000);
});