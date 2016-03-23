import {createStore} from 'redux'
import initialBoard from './helpers'
import Tile from './tile'

const DEFAULTSTATE = initialBoard(9, 9)

const board = (state = DEFAULTSTATE, action) => {
  switch (action.type) {
    case 'CLICK':
      let newTile = new Tile(tile.id)
      newTile.markAsExposed()
      //TODO insert new tile into existing slot
      return state
    default:
      return state
  }
}

const store = createStore(board);

export default store