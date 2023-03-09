
let phrases = [
  {
    phrase: "Enquanto houver vontade de lutar haverá esperança de vencer."
  },
  {
    phrase: "O medo de perder tira a vontade de ganhar."
  },
  {
    phrase: "Se você pretende ser rico, pense em economizar tanto quanto em ganhar"
  },
  {
    phrase: "A maior caridade é habilitar o pobre a ganhar a sua vida."
  },
  {
    phrase: "A avareza perde tudo ao pretender ganhar tudo."
  },
  {
    phrase: "Difícil é ganhar um amigo em uma hora; fácil é ofendê-lo em um minuto."
  },
  {
    phrase: "Seja honesto"
  },

]

const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')

let random = Math.floor(Math.random() * phrases.length)

let cookie1 = document.querySelector('#cookie1')
let btnReset = document.querySelector('#btn')

cookie1.addEventListener('click', hideCookie)
btnReset.addEventListener('click', resetCookie)


function hideCookie() {
  toogle()
  document.querySelector('.screen2 p').innerHTML = phrases[random].phrase
}

function resetCookie() {
  toogle()
  random = Math.floor(Math.random() * phrases.length);
}

function toogle() {
  screen1.classList.toggle('hide')
  screen2.classList.toggle('hide')
}

