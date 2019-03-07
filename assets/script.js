let lastWord
const words = [
  'Prova osttoasten idag!',
  'Kan du inte ta cykeln imorgon till skolan?',
  'Ge någon en extra kram!',
  'Köp svenska livsmedel.'
]

const init = () => {
  displayWord()
}

const displayWord = () => {
  document.querySelector('#call').textContent = getWord()
}

const getWord = () => {
  const getWord = words[randomNum()]
  console.log(getWord)
  return getWord
}

const randomNum = () => {
  let num = Math.floor(Math.random() * words.length)
  const word = words[num]

  if (word === lastWord) {
    num = randomNum()
  }

  lastWord = word
  return num
}
