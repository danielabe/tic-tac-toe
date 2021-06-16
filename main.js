const start = document.getElementById('start')
const coverPage = document.getElementById('coverPage')
const game = document.getElementById('game')
const select = document.getElementById('select')
const play = document.getElementById('play')

const head = document.querySelector('head')
const linkGame = document.createElement('link')
linkGame.innerHTML = `<link rel="stylesheet" href="styles/game-styles.css">`

start.addEventListener('click', () => {
    coverPage.classList.add('none')
    select.classList.remove('none')
})

play.addEventListener('click', () => {
    select.classList.add('none')
    game.classList.remove('none')
    head.appendChild(linkGame)
})