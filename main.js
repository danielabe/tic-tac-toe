const start = document.getElementById('start')
const coverPage = document.getElementById('coverPage')
const game = document.getElementById('game')
const select = document.getElementById('select')
const play = document.getElementById('play')
const imgClassic = document.getElementById('imgClassic')
const imgSpring = document.getElementById('imgSpring')
const imgSpace = document.getElementById('imgSpace')
const imgOther = document.getElementById('imgOther')

const themes = document.querySelectorAll('.theme')

let selectedTheme = null

const head = document.querySelector('head')
const linkGame = document.createElement('link')
linkGame.innerHTML = `<link rel="stylesheet" href="styles/spring-styles.css">`

start.addEventListener('click', () => {
    coverPage.classList.add('none')
    select.classList.remove('none')
    
})

play.addEventListener('click', () => {
    select.classList.add('none')
    game.classList.remove('none')
    head.appendChild(linkGame)

    selectedTheme = null
    deselect()
})

themes.forEach(th => th.addEventListener('click', () => {
    deselect()
    selectedTheme = th
    themeSelection(selectedTheme)
    
}))

function deselect() {
    imgClassic.classList.remove('selected-theme')
    imgSpring.classList.remove('selected-theme')
    imgSpace.classList.remove('selected-theme')
    imgOther.classList.remove('selected-theme')
}

function themeSelection(selectedTheme) {
    if(selectedTheme !== null) {
        play.disabled = false
    }
    selectedTheme.childNodes[0].classList.add('selected-theme')
}