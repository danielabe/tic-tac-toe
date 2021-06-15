const start = document.getElementById('start')
const coverPage = document.getElementById('coverPage')
const game = document.getElementById('game')
const head = document.querySelector('head')
const linkGame = document.createElement('link')
linkGame.innerHTML = `<link rel="stylesheet" href="styles/game-styles.css">`

start.addEventListener('click', () => {
    console.log('dani')
    coverPage.classList.add('none')
    game.classList.remove('none')
    head.appendChild(linkGame)
})

