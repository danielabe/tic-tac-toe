const button = document.getElementById('button')
const cells = document.querySelectorAll('.cell')

button.addEventListener('click', () => startGame())

function startGame() {
    console.log('dani')
}

console.log(cells)

cells.forEach(cell => cell.addEventListener('click', () => console.log(cell.id)))
