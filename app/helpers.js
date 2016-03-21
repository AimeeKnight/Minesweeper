import Tile from './tile'

function partition(tiles, size) {
  let results = []
  while (tiles.length) {
    results.push(tiles.splice(0, size));
  }
  return results
}

export default function initialBoard(rows, columns) {
  let tiles = []
  for (var i = 1; i <= rows * columns; i++) {
    tiles.push(new Tile(i))
  }
  tiles = partition(tiles, rows)

  return {rows, tiles}
}
