import React from 'react'

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

const MinesweeperView = React.createClass({
  getInitialState() {
    const rows = 9;
    const columns = 9;
    let tiles = this.initialBoard(rows, columns).tiles;
    return({ tiles, rows, columns });
  },

  initialBoard(rows, columns) {
    let tiles = [];
    for (var i = 1; i <= rows * columns; i++) {
      tiles.push(new Tile(i));
    }
    return {tiles};
  },

  render() {
    return(
      <div>
        <BoardView
          tiles={this.state.tiles}
          columns={this.state.columns}
          rows={this.state.rows} />
      </div>
    );
  }
});

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
    let rows = this.partition(tiles, columns).map((tiles) => <RowView rows={tiles} />);
    return(
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
    return(
      <tr className="row">{tds}</tr>
    )
  }
});

const TileView  = React.createClass({
  handleClick() {
    this.props.tile.markAsExposed()
    this.setState({})
  },

  render() {
    let {tile} = this.props
    let classes = 'tile'
    classes += tile.isExposed ? " isExposed" : ""

    if (tile.isMine){
      classes += " isMine"
    }

    return(
      <td className={classes}
          onClick={this.handleClick}>
          {tile.id}
      </td>
    )
  }
});

function render() {
  React.render(
    <MinesweeperView />,
    document.getElementById('app')
  )
}

render()

export default MinesweeperView
