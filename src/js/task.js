/* eslint-disable no-unused-vars */
export default class Task {
  constructor(id, title, isPinned) {
    this.id = id
    this.title = title
    this.isPinned = false
  }

  pin() {
    this.isPinned = true
  }

  unpin() {
    this.isPinned = false
  }
}
