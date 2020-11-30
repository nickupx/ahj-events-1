/* eslint-disable max-len */
/* eslint-disable class-methods-use-this */
import Task from './task'

export default class Tasklist {
  constructor() {
    this.tasks = []
    this.input = document.getElementById('tl-input')
  }

  add(title) {
    const task = new Task(this.tasks.length, title, false)
    this.tasks.push(task)
  }

  // тут можно один метод написать динамический, но лень :-)

  renderUnpinned(arr) {
    const block = document.getElementById('tl-all-list')
    const unpinned = arr.filter((item) => !item.isPinned)
    if (unpinned.length) {
      let html = ''
      for (const item of unpinned) {
        html += `
        <div class="task-item" data-id="${item.id}">
          <div>${item.title}</div>
          <div><input type="checkbox" data-id="${item.id}" class="checkbox-all"></div>
        </div>
      `
      }
      block.innerHTML = html
      const checkboxes = document.querySelectorAll('input.checkbox-all')
      for (const item of checkboxes) {
        item.addEventListener('change', () => {
          this.tasks[item.dataset.id].pin()
          this.renderTasks()
        })
      }
    } else {
      block.textContent = 'No tasks'
    }
  }

  renderPinned(arr) {
    const block = document.getElementById('tl-pinned-list')
    const pinned = arr.filter((item) => item.isPinned)
    if (pinned.length) {
      let html = ''
      for (const item of pinned) {
        html += `
        <div class="task-item task-pinned" data-id="${item.id}">
          <div>${item.title}</div>
          <div><input type="checkbox" data-id="${item.id}" class="checkbox-pinned" checked></div>
        </div>
      `
      }
      block.innerHTML = html
      const checkboxes = document.querySelectorAll('input.checkbox-pinned')
      for (const item of checkboxes) {
        item.addEventListener('change', () => {
          this.tasks[item.dataset.id].unpin()
          this.renderTasks()
        })
      }
    } else {
      block.textContent = 'No pinned tasks'
    }
  }

  renderTasks() {
    if (this.input.value) {
      this.filter()
    } else {
      this.renderUnpinned(this.tasks)
    }
    this.renderPinned(this.tasks)
  }

  filter() {
    const filtered = this.tasks.filter((item) => item.title.toLowerCase().startsWith(this.input.value.toLowerCase()))
    if (filtered.length) {
      this.renderUnpinned(filtered)
    } else {
      document.getElementById('tl-all-list').textContent = 'No tasks found'
    }
  }
}
