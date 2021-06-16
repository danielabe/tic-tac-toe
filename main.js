const start = document.getElementById('start')
const coverPage = document.getElementById('coverPage')
const game = document.getElementById('game')
const select = document.getElementById('select')
const play = document.getElementById('play')
const imgClassic = document.getElementById('imgClassic')
const imgSpring = document.getElementById('imgSpring')
const imgSpace = document.getElementById('imgSpace')
const imgOther = document.getElementById('imgOther')

const head = document.querySelector('head')
const themes = document.querySelectorAll('.theme')

let firstCard
let secondCard

let selectedTheme = null

const linkGame = document.createElement('link')

start.addEventListener('click', () => {
    coverPage.classList.add('none')
    select.classList.remove('none')
    
})

themes.forEach(th => th.addEventListener('click', () => {
    deselect()
    selectedTheme = th
    themeSelection(selectedTheme)
    linkGameFunction(selectedTheme.id)
}))

function linkGameFunction(link) {
    if(link === 'classic') {
        linkGame.innerHTML = `<link rel="stylesheet" href="styles/classic-styles.css">`
        firstCard = '<i class="fas fa-times"></i>'
        secondCard = '<img class="card" src="styles/images/trip_origin.svg" alt="">'
        
    }
    if(link === 'spring') {
        linkGame.innerHTML = `<link rel="stylesheet" href="styles/spring-styles.css">`
        firstCard = '<img class="card" src="styles/images/lady-beetle.png" alt="">'
        secondCard = '<img class="card" src="styles/images/flower.png" alt="">'
    }
    if(link === 'space') {
        linkGame.innerHTML = `<link rel="stylesheet" href="styles/space-styles.css">`
    }
    if(link === 'other') {
        linkGame.innerHTML = `<link rel="stylesheet" href="styles/other-styles.css">`
    }

}


function deselect() {
    imgClassic.classList.remove('selected-theme')
    imgSpring.classList.remove('selected-theme')
    imgSpace.classList.remove('selected-theme')
    imgOther.classList.remove('selected-theme')
}

function themeSelection(selectedTheme) {
    if(selectedTheme !== null) play.disabled = false
    selectedTheme.childNodes[0].classList.add('selected-theme')
}

play.addEventListener('click', () => {
    select.classList.add('none')
    game.classList.remove('none')
    head.appendChild(linkGame)
    
    selectedTheme = null
    deselect()
})

