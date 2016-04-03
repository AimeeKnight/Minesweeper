import React from 'react'
import TileView from './tile-view.jsx'

export default React.createClass({
  render() {
    let {rows} = this.props
    let tds = rows.map((tile, idx) => <TileView tile={tile} key={idx} />)
    return (
      <tr className="row">{tds}</tr>
    )
  }
})