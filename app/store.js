import {createStore} from 'redux'
import initialBoard from './helpers'
import Tile from './tile'

const DEFAULTSTATE = initialBoard(9, 9)

const board = (state = DEFAULTSTATE, action) => {
  switch (action.type) {
    case 'CLICK':
      let tiles = updateTile(state.tiles, action.tile.id)
      return {...state, tiles}
    default:
      return state
  }
}

const store = createStore(board);

export default store

function updateTile(tileRows, newTileId) {
  return tileRows.map((tileRow) => {
    return tileRow.map((tile) => {
      if (tile.id == newTileId) {
        let newTile = new Tile(newTileId)
        newTile.markAsExposed()
        return newTile
      }
      else {
        return tile
      }
    })
  })
}
