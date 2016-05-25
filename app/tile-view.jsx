import React from 'react'
import store from './store'

const TileView = ({ tile }) => {
  let classes = 'tile'
  classes += tile.isExposed ? " isExposed" : ""

  if (tile.isMine) {
    classes += " isMine"
  }

  const clickHandler = () => {
    store.dispatch({type: 'CLICK', tile})
  }

  return (
    <td className={classes}
        onClick={clickHandler}>
      {!tile.isMine && tile.isExposed && tile.surroundingMines}
    </td>
  )
}

TileView.propTypes = {
  tile: React.PropTypes.object.isRequired
}

export default TileView
