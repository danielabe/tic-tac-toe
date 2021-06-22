const cells = document.querySelectorAll('.cell')
const c1 = document.getElementById('c1')
const c2 = document.getElementById('c2')
const c3 = document.getElementById('c3')
const c4 = document.getElementById('c4')
const c5 = document.getElementById('c5')
const c6 = document.getElementById('c6')
const c7 = document.getElementById('c7')
const c8 = document.getElementById('c8')
const c9 = document.getElementById('c9')
const dkImg = document.getElementById('dkImg')
const winnerMsg = document.getElementById('winnerMsg')
const btnHomeGame = document.getElementById('btnHomeGame')
const restart = document.getElementById('restart')
const playAgain = document.getElementById('playAgain')
const btnHome = document.getElementById('btnHome')
const btnFirstPlayer = document.getElementById('btnFirstPlayer')
const btnSecondtPlayer = document.getElementById('btnSecondtPlayer')
const firstForm = document.getElementById('firstForm')
const secondForm = document.getElementById('secondForm')
const firstPlayerInput = document.getElementById('firstPlayer')
const secondPlayerInput = document.getElementById('secondPlayer')
const dkImgPlayers = document.getElementById('dkImgPlayers')

let turn = 'first'
let firstPlayer
let secondPlayer
let icon
let winner

cells.forEach(cell => cell.addEventListener('click', () => {
    if(cell.innerHTML === '') {
        winner = turn
        turnFunction(firstCard, secondCard, winner)
        cell.innerHTML = icon
        console.log(winner)
        checkWinner(winner)
    }
    console.log(turn + ' es tu turno')
}))

function turnFunction(firstCard, secondCard, winner) {
    console.log(winner)
    if(turn === 'first') {
        icon = firstCard
        turn = 'second'
    } else if (turn === 'second') {
        icon = secondCard
        turn = 'first'
    }
}

function checkWinner(winner) {
    if(c1.innerHTML === c2.innerHTML && c1.innerHTML === c3.innerHTML && c1.innerHTML !== '') {
        endGame(winner) 
    }
    if(c4.innerHTML === c5.innerHTML && c4.innerHTML === c6.innerHTML && c4.innerHTML !== '') {
        endGame(winner)
    }
    if(c7.innerHTML === c8.innerHTML && c7.innerHTML === c9.innerHTML && c7.innerHTML !== '') {
        endGame(winner)
    }
    if(c1.innerHTML === c4.innerHTML && c1.innerHTML === c7.innerHTML && c1.innerHTML !== '') {
        endGame(winner)
    }
    if(c2.innerHTML === c5.innerHTML && c2.innerHTML === c8.innerHTML && c2.innerHTML !== '') {
        endGame(winner)
    }
    if(c3.innerHTML === c6.innerHTML && c3.innerHTML === c9.innerHTML && c3.innerHTML !== '') {
        endGame(winner)
    }
    if(c1.innerHTML === c5.innerHTML && c1.innerHTML === c9.innerHTML && c1.innerHTML !== '') {
        endGame(winner)
    }
    if(c3.innerHTML === c5.innerHTML && c3.innerHTML === c7.innerHTML && c3.innerHTML !== '') {
        endGame(winner)
    }
}

function endGame(winner) {
    dkImg.classList.remove('none')
    if(winner === 'first') winnerMsg.innerText = firstPlayer + ' you win'
    if(winner === 'second') winnerMsg.innerText = secondPlayer + ' you win'
}

btnHomeGame.addEventListener('click', () => {
    home()
})

btnHome.addEventListener('click', () => {
    home()
})

function home() {
    coverPage.classList.remove('none')
    dkImgPlayers.classList.remove('none')
    firstForm.classList.remove('none')
    linkGame.remove()
    game.classList.add('none')
    dkImg.classList.add('none')
    cells.forEach(cell => cell.innerHTML = '')
    play.disabled = true
    turn = 'first'
    firstPlayerInput.value = ''
    secondPlayerInput.value = ''
}

restart.addEventListener('click', () => {
    cells.forEach(cell => cell.innerHTML = '')
    dkImg.classList.add('none')
    turn = 'first'
})

playAgain.addEventListener('click', () => {
    cells.forEach(cell => cell.innerHTML = '')
    dkImg.classList.add('none')
    turn = 'first'
})

btnFirstPlayer.addEventListener('click', (event) => {
    event.preventDefault()
    if(firstPlayerInput.value !== '') {
        firstForm.classList.add('none')
        secondForm.classList.remove('none')
        firstPlayer = firstPlayerInput.value
    }
})

btnSecondtPlayer.addEventListener('click', (event) => {
    event.preventDefault()
    if(secondPlayerInput.value !== '') {
        secondForm.classList.add('none')
        dkImgPlayers.classList.add('none')
        secondPlayer = secondPlayerInput.value
    }
})