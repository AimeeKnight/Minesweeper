import Tile from './tile'

export default function initialBoard(rows, columns) {
  let tiles = [];
  for (var i = 1; i <= rows * columns; i++) {
    tiles.push(new Tile(i));
  }
  return {columns, rows, tiles}
}
