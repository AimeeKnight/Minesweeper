import React from 'react'
import store from './store'

export default React.createClass({
  render() {
    let {tile} = this.props
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
        {tile.id}
      </td>
    )
  }
})