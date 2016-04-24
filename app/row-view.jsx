import React from 'react'
import TileView from './tile-view.jsx'

const RowView = ({ rows }) => {
  let tds = rows.map((tile, idx) => <TileView tile={tile} key={idx} />)
  return (
    <tr className="row">{tds}</tr>
  )
}

RowView.propTypes = {
  rows: React.PropTypes.array.isRequired
}

export default RowView