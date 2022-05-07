document.querySelector('*').addEventListener('click', doubleClick)

let isEncoded = false

function doubleClick() {
  if (isEncoded === false){
    for (const elem of document.getElementsByClassName('mission-text')) {
      elem.style.textTransform = 'none'
      elem.innerText = btoa(elem.innerText)
    }
    isEncoded = true
  } else {
    for (const elem of document.getElementsByClassName('mission-text')) {
      elem.innerText = atob(elem.innerText)
      elem.style.textTransform = 'uppercase'
    }
    isEncoded = false
  }
  console.log('hello')
}

touchableElement.addEventListener('touchstart', function (event) {
  touchstartX = event.changedTouches[0].screenX;
  touchstartY = event.changedTouches[0].screenY;
}, false);

touchableElement.addEventListener('touchend', function (event) {
  touchendX = event.changedTouches[0].screenX;
  touchendY = event.changedTouches[0].screenY;
  handleGesture();
}, false);


function handleGesture() {
  if (touchendX < touchstartX) {
      document.querySelector('body').style.background = black;
  }

  if (touchendX > touchstartX) {
      console.log('Swiped Right');
  }

  if (touchendY < touchstartY) {
      console.log('Swiped Up');
  }

  if (touchendY > touchstartY) {
      console.log('Swiped Down');
  }

  if (touchendY === touchstartY) {
      console.log('Tap');
  }
}
