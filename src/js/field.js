/* eslint-disable no-plusplus */
export default class Field {
  constructor(dimension) {
    this.dimension = dimension
    this.cellSize = 200
    this.container = document.getElementById('field')
  }

  init() {
    this.container.style.width = `${this.dimension * this.cellSize}px`
    for (let i = 1; i <= this.dimension ** 2; i++) {
      const cell = document.createElement('div')
      cell.className = 'cell'
      cell.id = i
      cell.style.width = `${this.cellSize}px`
      cell.style.height = `${this.cellSize}px`
      this.container.appendChild(cell)
    }
  }
}
