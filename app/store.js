import {createStore} from 'redux'
import initialBoard from './helpers'

const DEFAULTSTATE = initialBoard(9, 9)

const board = (state = DEFAULTSTATE, action) => {
  switch (action.type) {
    case 'CLICK':
      action.tile.markAsExposed()
      return state
    default:
      return state
  }
}

const store = createStore(board);

export default store