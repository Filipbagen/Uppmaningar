const words = [
  'Prova ost-tosten idag!',
  'Ta cykeln till skolan imorgon!',
  'Köp svenska livsmedel.',
  'Åk kollektivt istället för att ta bilen!',
  'Stäng av vattenkranen när du borstar tänderna.',
  'Ta en tur och panta de där burkarna/flaskorna.',
  'Skänk/sälj tröjan du inte använder'

]

let number = 0
const txt = document.querySelector('#txt')
const txt2 = document.querySelector('#txt2')

const evenOrOdd = () => {
  number++
  return number
}

const init = () => {
  displayWord()
}


console.log(evenOrOdd())






const displayWord = () => {
  const word = words[randomNum()]
  txt.textContent = word

  const word2 = words[randomNum()]
  txt2.textContent = word2
}

const randomNum = () => {
  const num = Math.floor(Math.random() * words.length)
  return num
}

const changeText = () => {

  if (evenOrOdd() % 2 === 0) {
    console.log('number is even')
    txt.classList.remove('in')
    txt.classList.add('out')

    txt2.textContent = words[randomNum()]
    txt2.classList.remove('out')
    txt2.classList.add('in')

  } else {
    console.log('number is odd')
    txt2.classList.remove('in')
    txt2.style.visibility = 'visible'
    txt2.classList.add('out')

    txt.textContent = words[randomNum()]
    txt.classList.remove('out')
    txt.classList.add('in')
  }
}