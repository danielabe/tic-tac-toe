const button = document.getElementById('button')
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

let icon = '<img class="card" src="styles/images/lady-beetle.png" alt="">'
let turn = 'first'

button.addEventListener('click', () => startGame())

function startGame() {
    console.log('dani')
}

console.log(cells)

cells.forEach(cell => cell.addEventListener('click', () => {
    if(cell.innerHTML === '') {
        turnFunction()
        cell.innerHTML = icon
        checkWinner()
    }
    console.log(turn + ' es tu turno')
    
}))

function turnFunction() {
    if(turn === 'first') {
        icon = '<img class="card" src="styles/images/lady-beetle.png" alt="">'
        turn = 'second'
    } else if (turn === 'second') {
        icon = '<img class="card" src="styles/images/flower.png" alt="">'
        turn = 'first'
    }
}

function checkWinner() {
    if(c1.innerHTML === c2.innerHTML && c1.innerHTML === c3.innerHTML && c1.innerHTML !== '') {
        console.log('ganaste')
    }
    if(c4.innerHTML === c5.innerHTML && c4.innerHTML === c6.innerHTML && c4.innerHTML !== '') {
        console.log('ganaste')
    }
    if(c7.innerHTML === c8.innerHTML && c7.innerHTML === c9.innerHTML && c7.innerHTML !== '') {
        console.log('ganaste')
    }
    if(c1.innerHTML === c4.innerHTML && c1.innerHTML === c7.innerHTML && c1.innerHTML !== '') {
        console.log('ganaste')
    }
    if(c2.innerHTML === c5.innerHTML && c2.innerHTML === c8.innerHTML && c2.innerHTML !== '') {
        console.log('ganaste')
    }
    if(c3.innerHTML === c6.innerHTML && c3.innerHTML === c9.innerHTML && c3.innerHTML !== '') {
        console.log('ganaste')
    }
    if(c1.innerHTML === c5.innerHTML && c1.innerHTML === c9.innerHTML && c1.innerHTML !== '') {
        console.log('ganaste')
    }
    if(c3.innerHTML === c5.innerHTML && c3.innerHTML === c7.innerHTML && c3.innerHTML !== '') {
        console.log('ganaste')
    }
}