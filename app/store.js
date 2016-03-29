import {createStore} from 'redux'
import Tile from './tile'
import Game from './game'

const DEFAULTSTATE = new Game(9, 9)

const board = (state = DEFAULTSTATE, action) => {
  switch (action.type) {
    case 'CLICK':
      // determine if mine we clicked is a mine
      // if yes
      // mark game as lost
      // else
      // update the tile
      let tiles = markAsExposed(state.tiles, action.tile.id)
      return {...state, tiles}
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
        return newTile
      }
      else {
        return tile
      }
    })
  })
}
