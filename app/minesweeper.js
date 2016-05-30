import React from 'react'
var ReactDOM = require('react-dom');
import {createStore} from 'redux'
import BoardView from './board-view.jsx'
import store from './store'

const MinesweeperView = ({tiles, rows}) => {
  return (
    <div>
      <BoardView
        tiles={tiles}
        rows={rows}
      />
      <input type='radio' value={store.getState().flagModeEnabled}  />Add Flag Mode
    </div>
  )
}

const render = () => {
  ReactDOM.render(
    <MinesweeperView
      tiles={store.getState().tiles}
      rows={store.getState().rows}
    />,
    document.getElementById('app')
  )
}

store.subscribe(render)
render()

export default MinesweeperView