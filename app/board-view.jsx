import React from 'react'
import RowView from './row-view.jsx'
import store from './store'

const BoardView = ({ tiles }) => {
  let rows = tiles.map((tile, idx) => <RowView rows={tile} key={idx} />)
  let isLost = store.getState().isLost

  if (isLost) {
    return <h1>:( Lost</h1>
  }
  return (
    <table className="board">
      <tbody>{rows}</tbody>
    </table>
  )
}

BoardView.propTypes = {
  tiles: React.PropTypes.array.isRequired
}

export default BoardView