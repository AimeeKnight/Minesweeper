import React from 'react'
import RowView from './row-view.jsx'

export default React.createClass({
  partition(tiles, size) {
    let results = [];
    while (tiles.length) {
      results.push(tiles.splice(0, size));
    }
    return results;
  },

  render() {
    const {tiles, columns, handleClick} = this.props
    let rows = this.partition(tiles, columns).map((tiles) => <RowView rows={tiles} handleClick={handleClick}/>);
    return (
      <table className="board">
        <tbody>{rows}</tbody>
      </table>
    )
  }
})