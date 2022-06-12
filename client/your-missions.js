


document.querySelector('*').addEventListener('click', doubleClick)

let isEncoded = false

function doubleClick() {
  if (isEncoded === false){
    for (const elem of document.getElementsByClassName('mission-text')) {
      elem.style.textTransform = 'none'
      elem.innerText = btoa(elem.innerText)
      console.log(elem.innerText.length)
      typeWriter(elem.innerText)
      
      
    }
    isEncoded = true
  } else {
    for (const elem of document.getElementsByClassName('mission-text')) {
      elem.innerText = atob(elem.innerText)
      elem.style.textTransform = 'uppercase'
    }
    isEncoded = false
  }
}

var txt = 'Lorem ipsum typing effect!'; /* The text */
var speed = 50; /* The speed/duration of the effect in milliseconds */

function typeWriter(element) {
  let i = 1
  console.log(element.length)
  if (i < element.length) {
    console.log(element.length)
    element.innerHTML += element.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
  console.log('bonjour')
}
