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

let icon
let turn = 'first'
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
    winnerMsg.innerText = winner + ' you win'
}

btnHomeGame.addEventListener('click', () => {
    coverPage.classList.remove('none')
    game.classList.add('none')
    linkGame.remove()
    play.disabled = true
    turn = 'first'
})