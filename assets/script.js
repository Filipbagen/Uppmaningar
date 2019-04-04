const words = [
  { summon: 'Håll utkik efter märken som Svanen och Bra miljöval när du handlar.', color: '#F5CDFF, #A862C4' },                         //Purple
  { summon: 'Välj det vegetariska alternativet i matsalen.', color: '#F5CDFF, #A862C4' },                         //Purple
  { summon: 'Prova ost-toasten på rasten!', color: '#F5CDFF, #A862C4' },                         //Purple
  { summon: 'Köp svenska livsmedel.', color: '#F5CDFF, #A862C4' },                         //Purple
  { summon: 'Köp tre ekologiska varor nästa gång du handlar.', color: '#F5CDFF, #A862C4' },                         //Purple
  { summon: 'Ta en mindre portion om du är osäker på om du tycker om maten.', color: '#F5CDFF, #A862C4' },                         //Purple

  { summon: 'Ta cykeln till skolan imorgon!', color: '#F1C7BC, #CD738B' },                 //Red
  { summon: 'Använd slut på dina produkter innan du köper nytt.', color: '#F5CDFF, #A862C4' },                         //Purple
  { summon: 'Stäng av vattenkranen när du borstar tänderna ikväll.', color: '#C0ECF8, #4072B6' }, //Blue
  { summon: 'Ta en tur och panta de där burkarna och flaskorna.', color: '#C7F6CD, #4B9763' }, //Green
  { summon: 'Skänk eller sälj tröjan som du inte längre använder.', color: '#FEC2AF, #E1615E' },             //Orange
  { summon: 'Välj kranvatten istället för flaskvatten.', color: '#C0ECF8, #4072B6' }, //Blue
  { summon: 'Stäng av istället för att sätta på standby.', color: '#F3E17C, #FBA345' }, //Orange2
  { summon: 'Dra ur laddaren ur eluttaget när du är klar eller går på lunch.', color: '#F3E17C, #FBA345' }, //Orange2
  { summon: 'Släck lampan.', color: '#F3E17C, #FBA345' }, //Orange2
  { summon: 'Fyll tvätt- och diskmaskinen.', color: '#F3E17C, #FBA345' }, //Orange2
  { summon: 'Sänk temperaturen hemma med 2 grader.', color: '#F3E17C, #FBA345' }, //Orange2
  { summon: 'Skippa torktumlaren, lufttorka tvätten.', color: '#F3E17C, #FBA345' }, //Orange2
  { summon: 'Lämna i din mobil på lagning istället för att köpa en ny.', color: '#F3E17C, #FBA345' }, //Orange2

  { summon: 'Samåk till matchen istället för att åka ensam.', color: '#F1C7BC, #CD738B' },                 //Red
  { summon: 'Välj en produkt med så lite onödig förpackning som möjligt.', color: '#C7F6CD, #4B9763' }, //Green

  { summon: 'Sätt upp en skylt som tackar nej till reklam.', color: '#C7F6CD, #4B9763' }, //Green
  { summon: 'Släng inte skräp i naturen.', color: '#C7F6CD, #4B9763' }, //Green
  { summon: 'Pumpa däcken på moppen och bilen.', color: '#F1C7BC, #CD738B' },    //Red
  { summon: 'Använd en återanvändningsbar mugg istället för Take Away när du köper kaffe.', color: '#C7F6CD, #4B9763' }, //Green
  { summon: 'Köp kläder av kvalité istället för kvantitet.', color: '#FEC2AF, #E1615E' },             //Orange
  { summon: 'Följ Greta Thunberg på instagram och bli inspirerad.', color: '#F3E17C, #FBA345' }, //Orange2
  { summon: 'Köp och låna kläder av kompisar istället för att köpa nya.', color: '#FEC2AF, #E1615E' },             //Orange
  { summon: 'Ge bort ett presentkort i present.', color: '#FEC2AF, #E1615E' },             //Orange
  { summon: 'Köp kläder på tradera', color: '#FEC2AF, #E1615E' },             //Orange

  { summon: 'Vädra dina kläder istället för att tvätta dem.', color: '#F3E17C, #FBA345' }, //Orange2
  { summon: 'Köp ekologisk, svensk mathavre istället för ris.', color: '#F5CDFF, #A862C4' },                         //Purple
  { summon: 'Köp kläder i butik istället för online.', color: '#FEC2AF, #E1615E' },             //Orange

  { summon: 'Planera veckans middagar och inköpslista, istället för att åka och handla flera gånger.', color: '#F5CDFF, #A862C4' },                         //Purple
  { summon: 'Du behöver inte alltid den senaste tekniken.', color: '#F3E17C, #FBA345' }, //Orange2
  { summon: 'Sälj teknik som du inte längre använder.', color: '#F3E17C, #FBA345' }, //Orange2
  { summon: 'Lämna in trasig teknik på återbruket.', color: '#F3E17C, #FBA345' }, //Orange2
  { summon: 'Skippa engångsartiklarna.', color: '#C7F6CD, #4B9763' }, //Green
  { summon: 'Prova det vegetariska när du äter på restaurang.', color: '#F5CDFF, #A862C4' },                         //Purple
  { summon: 'Använd betalkort istället för kontanter.', color: '#C7F6CD, #4B9763' }, //Green
  { summon: 'Anteckna digitalt istället för med penna och papper.', color: '#C7F6CD, #4B9763' }, //Green
  { summon: 'Skaffa en digital brevlåda för att spara papper.', color: '#C7F6CD, #4B9763' }, //Green
  { summon: 'Det räcker med bara några droppar diskmedel.', color: '#C0ECF8, #4072B6' }, //Blue
  { summon: 'Ta med en vattenflaska till skolan istället för att använda plastmuggarna.', color: '#C0ECF8, #4072B6' }, //Blue
  { summon: 'Släng aldrig mat.', color: '#C7F6CD, #4B9763' }, //Green
  { summon: 'Panta dina burkar här i Grillskas pantlådor.', color: '#C7F6CD, #4B9763' }, //Green
  { summon: 'Se till att köpa fairtrade om möjligt.', color: '#C7F6CD, #4B9763' }, //Green
  { summon: 'Lägg dina använda papper i pappersamlingen.', color: '#C7F6CD, #4B9763' }, //Green
  { summon: 'Testa veganchoklad.', color: '#F5CDFF, #A862C4' },                         //Purple
  { summon: 'Testa veganglass.', color: '#F5CDFF, #A862C4' },                         //Purple
  { summon: 'Laga dina kläder istället för att slänga dem eller köpa nytt.', color: '#F3E17C, #FBA345' }, //Orange2
  { summon: 'Arbeta digitalt istället för analogt.', color: '#C7F6CD, #4B9763' }, //Green
  { summon: '⅓ av alla bilåkningar är onödiga. Tänk på när du verkligen måste åka bil.', color: '#C7F6CD, #4B9763' }, //Green
  { summon: 'Ta matlåda till jobbet.', color: '#F5CDFF, #A862C4' },   //Purple
  { summon: 'Återanvänd plastfolie.', color: '#F5CDFF, #A862C4' },   //Purple
  { summon: 'Återanvänd aluminiumfolie.', color: '#F5CDFF, #A862C4' },   //Purple
  { summon: 'Köp svenska mejeriprodukter.', color: '#F5CDFF, #A862C4' },   //Purple
  { summon: 'Sopsortera.', color: '#C7F6CD, #4B9763' }, //Green
  { summon: 'Köp kläder på second hand.', color: '#FEC2AF, #E1615E' },   //Orange
  { summon: 'Klä dig varmt istället för att höja gradantalet på elementen.', color: '#F3E17C, #FBA345' }, //Orange2
  { summon: 'När du väl kör bil, kör miljövänligt.', color: '#F1C7BC, #CD738B' }, //Red
  { summon: 'Överväg en elbil.', color: '#F1C7BC, #CD738B' }, //Red
  { summon: 'Ha Earth Hour en gång i månaden.', color: '#C7F6CD, #4B9763' }, //Green
  { summon: 'Ät mindre kött.', color: '#F5CDFF, #A862C4' },    //Purple
]

let number = 0
const txt = document.querySelector('#txt')
const txt2 = document.querySelector('#txt2')
const body = document.querySelector('.canvas')
const body2 = document.querySelector('.canvas2')

const init = () => {
  firstTxt()
}

const firstTxt = () => {
  const firstNum = randomNum()
  console.log(firstNum)

  body2.style.backgroundImage = 'linear-gradient(' + words[firstNum].color + ')'
  txt2.textContent = words[firstNum].summon
  txt2.style.visibility = 'visible'
  txt2.classList.add('in');
}

const evenOrOdd = () => {
  number++
  return number
}

const randomNum = () => {
  const num = Math.floor(Math.random() * words.length)
  return num
}

const changeTextAndBg = () => {

  const myNum = randomNum()
  const myNum2 = randomNum()

  // Gradient
  const myGradient = words[myNum].color
  const myGradient2 = words[myNum2].color
  // body.style.backgroundImage = 'linear-gradient(' + myGradient + ')'

  // Text
  if (evenOrOdd() % 2 === 0) { // Number is even
    txt.classList.remove('in') // Bort med txt, in med txt2
    txt.classList.add('out')

    txt2.textContent = words[myNum2].summon
    txt2.classList.remove('out')
    txt2.classList.add('in')

    // Gradient
    body.classList.remove('in')
    body.classList.add('out')

    body2.style.backgroundImage = 'linear-gradient(' + myGradient2 + ')'
    body2.classList.remove('out')
    body2.classList.add('in')
  } else {                    // Number is odd
    txt2.classList.remove('in') // Bort med txt2, in med txt
    txt2.style.visibility = 'visible'
    txt2.classList.add('out')

    txt.textContent = words[myNum].summon
    txt.classList.remove('out')
    txt.classList.add('in')

    // Gradient
    body2.classList.remove('in')
    body2.classList.add('out')

    body.style.backgroundImage = 'linear-gradient(' + myGradient + ')'
    body.classList.remove('out')
    body.classList.add('in')
  }
}
