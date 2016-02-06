function initialBoard(rows, columns) {
  var board = {};
  var tiles = [];
  var tile = 1;

  for (var i = 0; i < rows; i++) {
    var row = [];
    for (var j = 0; j < columns; j++) {
      row.push(tile++);
    }
    tiles.push(row);
  }

  board.tiles = tiles;
  return board;
}

var Minesweeper = React.createClass({
  render() {
    var tiles = initialBoard(9,9).tiles;
    return (
      <div>
        <Board tiles={tiles} />
      </div>
    );
  }
});

var Board = React.createClass({
  render() {
    var board = this.props.tiles.map((row) => {
      return row.map((tile) => {
        return <Tile index={tile} />
      });
    });

    return (
      <div className="board">{board}</div>
    );
  }
});

var Tile  = React.createClass({
  // make isExposed state?
  render() {
    var index = this.props.index;
    var end = this.props.index % 9 === 0;
    return <div className="tile" isExposed="false" isEnd={end}>{index}</div>
  }
});

ReactDOM.render(
  <Minesweeper/>,
  document.getElementById('container')
);


