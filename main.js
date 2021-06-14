const button = document.getElementById('button')
const cells = document.querySelectorAll('.cell')

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