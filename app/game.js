import Tile from './models/tile'

export default class Game {
  constructor(rows, columns) {
    this.tiles = initialBoard(rows, columns)
    this.isLost = false
    this.rows = rows
  }
}

function partition(tiles, size) {
  let results = []
  while (tiles.length) {
    results.push(tiles.splice(0, size));
  }
  return results
}

function initialBoard(rows, columns) {
  let tiles = []
  for (var i = 1; i <= rows * columns; i++) {
    tiles.push(new Tile(i))
  }
  tiles = partition(tiles, rows)

  return tiles
}
