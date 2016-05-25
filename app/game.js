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
  tiles = markSurroundingTiles(tiles)

  return tiles
}

function markSurroundingTiles (tiles) {
  for (var i = 0; i < tiles.length; i++) {
    for (var j = 0; j < tiles[i].length; j++) {
      var total = 0;
      j > 0 && tiles[i][j - 1].isMine && total++
      j < tiles[i].length - 1 && tiles[i][j + 1].isMine && total++
      i > 0 && tiles[i - 1][j].isMine && total++
      i < tiles.length - 1 && tiles[i + 1][j].isMine && total++
      i > 0 && j < tiles[i].length - 1 && tiles[i - 1][j + 1].isMine && total++
      i > 0 && j > 0 && tiles[i - 1][j - 1].isMine && total++
      i < tiles.length - 1 && j < tiles[i].length - 1 && tiles[i + 1][j + 1].isMine && total++
      i < tiles.length - 1 && j > 0 && tiles[i + 1][j - 1].isMine && total++
      tiles[i][j].surroundingMines = total
    }
  }
  return tiles
}
