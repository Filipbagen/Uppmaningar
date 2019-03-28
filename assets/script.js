const words = [
  { summon: "Prova ost-tosten idag!", color: "#F5CDFF, #A862C4" },                         //Purple
  { summon: "Ta cykeln till skolan imorgon!", color: "#F1C7BC, #CD738B" },                 //Red
  { summon: "Stäng av vattenkranen när du borstar tänderna.", color: "#C0ECF8, #4072B6" }, //Blue
  { summon: "Ta en tur och panta de där burkarna/flaskorna.", color: "#C7F6CD, #4B9763" }, //Green
  { summon: "Skänk/sälj tröjan du inte använder", color: "#FEC2AF, #E1615E" },             //Orange
]


let number = 0
const txt = document.querySelector('#txt')
const txt2 = document.querySelector('#txt2')
const body = document.querySelector('.canvas')
const body2 = document.querySelector('.canvas2')

const init = () => {
  firstTxt()
   console.log(number)
}

const firstTxt = () => {
  const firstNum = randomNum()

  body2.style.backgroundImage = 'linear-gradient(' + words[firstNum].color + ')'
  txt2.textContent = words[firstNum].summon
  txt2.style.visibility = 'visible'
}


const evenOrOdd = () => {
  number++
  console.log(number)
  return number
}

const randomNum = () => {
  const num = Math.floor(Math.random() * words.length)
  return num
}

const changeTextAndBg = () => {

  const myNum = randomNum()
  const myNum2 = randomNum()

  // console.log(myNum)
  // console.log(myNum2)


  //Gradient
  const myGradient = words[myNum].color
  const myGradient2 = words[myNum2].color
  // body.style.backgroundImage = 'linear-gradient(' + myGradient + ')'




  //Text
  if (evenOrOdd() % 2 === 0) { //Number is even
    txt.classList.remove('in') //Bort med txt, in med txt2
    txt.classList.add('out')

    txt2.textContent = words[myNum2].summon
    txt2.classList.remove('out')
    txt2.classList.add('in')

    //Gradient
    body.classList.remove('in')
    body.classList.add('out')

    body2.style.backgroundImage = 'linear-gradient(' + myGradient2 + ')'
    body2.classList.remove('out')
    body2.classList.add('in')


  } else {                     //Number is odd
    txt2.classList.remove('in') //Bort med txt2, in med txt
    txt2.style.visibility = 'visible'
    txt2.classList.add('out')

    txt.textContent = words[myNum].summon
    txt.classList.remove('out')
    txt.classList.add('in')

    //Gradient
    body2.classList.remove('in')
    body2.classList.add('out')

    body.style.backgroundImage = 'linear-gradient(' + myGradient + ')'
    body.classList.remove('out')
    body.classList.add('in')
  }
}
