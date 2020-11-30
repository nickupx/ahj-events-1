/* eslint-disable no-alert */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-plusplus */
import Field from './field'
import Character from './character'
import Tasklist from './tasklist'

const field = new Field(4)
field.init()

const character = new Character()
character.init()

let hits = 0
let misses = 0

const move = character.move.bind(character)

field.container.addEventListener('click', (event) => {
  if (event.target.id === character.img.id) {
    hits++
    document.getElementById('hits').textContent = hits
    character.move()
  } else {
    misses++
    document.getElementById('misses').textContent = misses
  }
  if (misses === 5) {
    alert('Game Over')
    location.reload()
  }
})

setInterval(move, 1000)

// filter

const tasklist = new Tasklist()

const input = document.getElementById('tl-input')

input.addEventListener('keyup', (event) => {
  tasklist.filter(input.value)

  if (input.value !== '' && event.keyCode === 13) {
    tasklist.add(input.value)
    input.value = ''
    tasklist.renderTasks()
  }
})
