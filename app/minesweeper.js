import React from 'react'
import { createStore, combineReducers } from 'redux'

class Tile {
  constructor(id) {
    this.id = id
    this.isExposed = false
    this.isMine = Math.round(Math.random()) === 1
  }

  markAsExposed() {
    this.isExposed = true
  }
}

const initialBoard = function (rows, columns) {
  let tiles = [];
  for (var i = 1; i <= rows * columns; i++) {
    tiles.push(new Tile(i));
  }
  return {columns, rows, tiles};
}

const board = (state = initialBoard(9, 9), action) => {
  return state;
}

const minesweeperApp = combineReducers({
  board
});

const store = createStore(minesweeperApp);

const MinesweeperView = ({board}) => {
  return (
    <div>
      <BoardView
        tiles={board.tiles}
        columns={board.columns}
        rows={board.rows}/>
    </div>
  );
};

const BoardView = React.createClass({
  partition(tiles, size) {
    let results = [];
    while (tiles.length) {
      results.push(tiles.splice(0, size));
    }
    return results;
  },

  render() {
    const {tiles, columns} = this.props
    let rows = this.partition(tiles, columns).map((tiles) => <RowView rows={tiles}/>);
    return (
      <table className="board">
        <tbody>{rows}</tbody>
      </table>
    )
  }
});

const RowView = React.createClass({
  render() {
    let rows = this.props.rows
    let tds = rows.map((tile) => <TileView tile={tile} update={this.update}/>);
    return (
      <tr className="row">{tds}</tr>
    )
  }
});

const TileView = React.createClass({
  handleClick() {
    // TODO: fire an event instead
    this.props.tile.markAsExposed()
    this.setState({})
  },

  render() {
    let {tile} = this.props
    let classes = 'tile'
    classes += tile.isExposed ? " isExposed" : ""

    if (tile.isMine) {
      classes += " isMine"
    }

    return (
      <td className={classes}
          onClick={this.handleClick}>
        {tile.id}
      </td>
    )
  }
});

const render = () => {
  React.render(
    <MinesweeperView
      {...store.getState()}
    />,
    document.getElementById('app')
  );
}

render();
store.subscribe(render);

export default MinesweeperView
