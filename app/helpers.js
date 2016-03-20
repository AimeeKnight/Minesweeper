import Tile from './tile'

export function partition(tiles, size) {
  let results = []
  while (tiles.length) {
    results.push(tiles.splice(0, size));
  }
  return results
}

export function initialBoard(rows, columns) {
  let tiles = []
  for (var i = 1; i <= rows * columns; i++) {
    tiles.push(new Tile(i))
  }

  tiles = partition(tiles, rows)

  return {rows, tiles}
}
