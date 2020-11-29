import generateRandom from './generate'

export default class Character {
  constructor() {
    this.img = document.createElement('img')
    this.img.src = 'https://github.com/netology-code/ahj-homeworks/raw/simplification/dom/pic/goblin.png'
    this.img.id = 'character'
  }

  init() {
    this.position = generateRandom()
    const cell = document.getElementById(this.position)
    cell.appendChild(this.img)
  }

  move() {
    const currentPosition = this.img.parentElement.id
    const nextPosition = generateRandom()
    if (currentPosition !== nextPosition) {
      // this.img.remove()
      this.position = nextPosition
      const cell = document.getElementById(this.position)
      cell.appendChild(this.img)
      return
    }
    this.move()
  }
}

// function moveCharacter() {
//   const prevPosition = document.getElementById('character').parentElement.id
//   const position = getRandomIntInclusive(1, FIELD_DIMENSION * FIELD_DIMENSION)
//   if (prevPosition !== position) {
//     img.remove()
//     const filledCell = document.getElementById(position)
//     filledCell.appendChild(img)
//   } else {
//     // вроде бы уместно тут вызвать рекурсивно?
//     moveCharacter()
//   }
// }
