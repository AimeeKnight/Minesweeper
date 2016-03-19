import React from 'react'
import TileView from './tile-view.jsx'

export default React.createClass({
  render() {
    let {rows, handleClick} = this.props
    let tds = rows.map((tile) => <TileView tile={tile} handleClick={handleClick}/>);
    return (
      <tr className="row">{tds}</tr>
    )
  }
})