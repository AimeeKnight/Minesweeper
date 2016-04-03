import React from 'react'
import RowView from './row-view.jsx'

export default React.createClass({
  render() {
    const {tiles} = this.props
    let rows = tiles.map((tile, idx) => <RowView rows={tile} key={idx} />)
    return(
      <table className="board">
        <tbody>{rows}</tbody>
      </table>
    )
  }
})