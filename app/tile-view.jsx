import React from 'react'

export default React.createClass({
  render() {
    let {tile, handleClick} = this.props
    let classes = 'tile'
    classes += tile.isExposed ? " isExposed" : ""

    if (tile.isMine) {
      classes += " isMine"
    }

    return (
      <td className={classes}
          onClick={handleClick(tile)}>
        {tile.id}
      </td>
    )
  }
})