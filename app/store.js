import {createStore} from 'redux'
import Tile from './models/tile'
import Game from './game'

const DEFAULTSTATE = new Game(9, 9)

const board = (state = DEFAULTSTATE, action) => {
  switch (action.type) {
    case 'CLICK':
      let isLost = action.tile.isMine
      let tiles = markAsExposed(state.tiles, action.tile.id)
      return {...state, tiles, isLost}
    default:
      return state
  }
}

const store = createStore(board);

export default store

function markAsExposed(tileRows, newTileId) {
  return tileRows.map((tileRow) => {
    return tileRow.map((tile) => {
      if (tile.id == newTileId) {
        let newTile = new Tile(newTileId)
        newTile.markAsExposed()
        newTile.isMine = tile.isMine
        newTile.surroundingMines = tile.surroundingMines
        return newTile
      }
      else {
        return tile
      }
    })
  })
}
