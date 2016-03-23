import React from 'react'
import TileView from './tile-view.jsx'

export default React.createClass({
  render() {
    let {rows} = this.props
    let tds = rows.map((tile) => <TileView tile={tile} />)
    return (
      <tr className="row">{tds}</tr>
    )
  }
})