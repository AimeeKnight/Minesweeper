import React from 'react'
import RowView from './row-view.jsx'
import {partition} from './helpers'

export default React.createClass({
  render() {
    const {tiles, handleClick} = this.props
    let rows = tiles.map((tile) => <RowView rows={tile} handleClick={handleClick}/>)
    return(
      <table className="board">
        <tbody>{rows}</tbody>
      </table>
    )
  }
})