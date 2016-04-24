import React from 'react'
import RowView from './row-view.jsx'

const BoardView = ({ tiles }) => {
  let rows = tiles.map((tile, idx) => <RowView rows={tile} key={idx} />)
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