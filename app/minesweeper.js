import React from 'react'
var ReactDOM = require('react-dom');
import {createStore} from 'redux'
import {initialBoard, partition} from './helpers'
import BoardView from './board-view.jsx'
import TileView from './tile-view.jsx'

let defaultState = initialBoard(9, 9)

const board = (state = defaultState, action) => {
  switch (action.type) {
    case 'CLICK':
      return state
    default:
      return state
  }
}

const MinesweeperView = ({tiles, rows, handleClick}) => {
  return (
    <div>
      <div>
        <BoardView
          tiles={tiles}
          rows={rows}
          handleClick={handleClick}
        />
      </div>
    </div>
  )
}

const store = createStore(board);

const render = () => {
  ReactDOM.render(
    <MinesweeperView
      tiles={store.getState().tiles}
      rows={store.getState().rows}
      handleClick={(tile) => {
        tile.markAsExposed()
        store.dispatch({type: 'CLICK'})
        }}
    />,
    document.getElementById('app')
  )
}

store.subscribe(render)
render()

export default MinesweeperView
