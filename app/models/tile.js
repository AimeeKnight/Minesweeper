export default class Tile {
  constructor(id) {
    this.id = id
    this.isExposed = false
    this.isMine = Math.round(Math.random()) === 1
  }

  markAsExposed() {
    this.isExposed = true
  }
}