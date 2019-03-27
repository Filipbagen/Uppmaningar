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
const body = document.querySelector('body')

const init = () => {
  firstTxt()
}

const firstTxt = () => {
  const firstNum = randomNum()

  body.style.backgroundImage = 'linear-gradient(' + words[firstNum].color + ')'
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
  console.log(myNum)
  console.log(myNum)


  //Gradient
  const myGradient = words[myNum].color
  const bg = document.querySelector('body')
  bg.style.backgroundImage = 'linear-gradient(' + myGradient + ')'
  console.log(myGradient)

  //Text
  if (evenOrOdd() % 2 === 0) { //Number is even
    txt.classList.remove('in')
    txt.classList.add('out')

    txt2.textContent = words[myNum].summon
    txt2.classList.remove('out')
    txt2.classList.add('in')

  } else {                     //Number is odd
    txt2.classList.remove('in')
    txt2.style.visibility = 'visible'
    txt2.classList.add('out')

    txt.textContent = words[myNum].summon
    txt.classList.remove('out')
    txt.classList.add('in')
  }
}
