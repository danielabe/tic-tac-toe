const start = document.getElementById('start')
const coverPage = document.getElementById('coverPage')
const game = document.getElementById('game')
const select = document.getElementById('select')
const play = document.getElementById('play')
const imgClassic = document.getElementById('imgClassic')
const imgSpring = document.getElementById('imgSpring')
const imgSpace = document.getElementById('imgSpace')
const imgHalloween = document.getElementById('imgHalloween')
const springRetributions = document.getElementById('springRetributions')
const spaceRetributions = document.getElementById('spaceRetributions')
const halloweenRetributions = document.getElementById('halloweenRetributions')
const backSpace = document.getElementById('backSpace')
const spaceImg = document.getElementById('spaceImg')

const main = document.querySelector('main')
const head = document.querySelector('head')
const themes = document.querySelectorAll('.theme')

let firstCard
let secondCard

const height = window.innerHeight
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
        firstCard = '<img class="card cross" src="styles/images/cross.svg" alt="">'
        secondCard = '<img class="card" src="styles/images/trip_origin.svg" alt="">'
        springRetributions.classList.add('none')
        spaceRetributions.classList.add('none')
        backSpace.classList.add('none')
        halloweenRetributions.classList.add('none')
    }
    if(link === 'spring') {
        linkGame.innerHTML = `<link rel="stylesheet" href="styles/spring-styles.css">`
        firstCard = '<img class="card" src="styles/images/lady-beetle.png" alt="">'
        secondCard = '<img class="card" src="styles/images/sakura.png" alt="">'
        springRetributions.classList.remove('none')
        spaceRetributions.classList.add('none')
        backSpace.classList.add('none')
        halloweenRetributions.classList.add('none')
    }
    if(link === 'space') {
        linkGame.innerHTML = `<link rel="stylesheet" href="styles/space-styles.css">`
        firstCard = '<img class="card" src="styles/images/lanzadera.png" alt="">'
        secondCard = '<img class="card" src="styles/images/saturno.png" alt="">'
        spaceRetributions.classList.remove('none')
        backSpace.classList.remove('none')
        springRetributions.classList.add('none')
        halloweenRetributions.classList.add('none')
    }
    if(link === 'halloween') {
        linkGame.innerHTML = `<link rel="stylesheet" href="styles/halloween-styles.css">`
        firstCard = '<img class="card" src="styles/images/fantasma.svg" alt="">'
        secondCard = '<img class="card" src="styles/images/pocion.svg" alt="">'
        halloweenRetributions.classList.remove('none')
        springRetributions.classList.add('none')
        spaceRetributions.classList.add('none')
        backSpace.classList.add('none')
    }

}

function deselect() {
    imgClassic.classList.remove('selected-theme')
    imgSpring.classList.remove('selected-theme')
    imgSpace.classList.remove('selected-theme')
    imgHalloween.classList.remove('selected-theme')
}

function themeSelection(selectedTheme) {
    if(selectedTheme !== null) play.disabled = false
    selectedTheme.childNodes[1].classList.add('selected-theme')
}

play.addEventListener('click', () => {
    select.classList.add('none')
    game.classList.remove('none')
    head.appendChild(linkGame)
    
    selectedTheme = null
    deselect()
})

//obtener height

function getHeight() {
    main.style.height = height + 'px'
    select.style.height = height + 'px'
    dkImgPlayers.style.height = height + 'px'
    spaceImg.style.height = height + 'px'
}

getHeight()