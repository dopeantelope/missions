


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
