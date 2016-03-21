import React from 'react'
var ReactDOM = require('react-dom');
import {createStore} from 'redux'
import initialBoard from './helpers'
import BoardView from './board-view.jsx'

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

const MinesweeperView = ({tiles, rows, handleClick}) => {
  return (
    <div>
      <BoardView
        tiles={tiles}
        rows={rows}
        handleClick={handleClick}
      />
    </div>
  )
}

const store = createStore(board);

const render = () => {
  ReactDOM.render(
    <MinesweeperView
      tiles={store.getState().tiles}
      rows={store.getState().rows}
      handleClick={(tile) => store.dispatch({type: 'CLICK', tile})}
    />,
    document.getElementById('app')
  )
}

store.subscribe(render)
render()

export default MinesweeperView
