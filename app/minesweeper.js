import React from 'react'
import { createStore, combineReducers } from 'redux'
import initialBoard from './helpers'
import BoardView from './board-view.jsx'

const board = (state = initialBoard(9, 9), action) => {
  switch (action.type) {
    case 'click':
      return state
    default:
      return state
  }
}

const minesweeperApp = combineReducers({board});
const store = createStore(minesweeperApp)
const dispatch = (action) => {store.dispatch(action)}

const MinesweeperView = ({board}) => {
  const handleClick = (tile) => {
    return () => {
      tile.markAsExposed()
      dispatch({type: 'click'})
    }
  }

  return (
    <div>
      <BoardView
        tiles={board.tiles}
        columns={board.columns}
        rows={board.rows}
        handleClick={handleClick}
      />
    </div>
  )
}

const render = () => {
  React.render(
    <MinesweeperView
      {...store.getState()}
      dispatch={dispatch}
    />,
    document.getElementById('app')
  )
}

render();
store.subscribe(render)

export default MinesweeperView
