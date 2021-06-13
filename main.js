const button = document.getElementById('button')
const cells = document.querySelectorAll('.cell')

let icon = '<i class="fas fa-rocket"></i>'
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
        icon = '<i class="fas fa-rocket"></i>'
        turn = 'second'
    } else if (turn === 'second') {
        icon = '<i class="fas fa-meteor"></i>'
        turn = 'first'
    }
}