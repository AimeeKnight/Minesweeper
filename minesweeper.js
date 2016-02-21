function initialBoard(rows, columns) {
  var tiles = [];

  for (var i = 1; i <= rows * columns; i++) {
    tiles.push(i);
  }

  return {tiles};
}

var Minesweeper = React.createClass({
  render() {
    const columns = 9;
    const rows = 9;
    var tiles = initialBoard(rows, columns).tiles;
    return (
      <div>
        <Board tiles={tiles} columns={columns} rows={rows} />
      </div>
    );
  }
});

var Board = React.createClass({
  render() {

    function partition(tiles, size) {
      var results = [];
      while (tiles.length) {
        results.push(tiles.splice(0, size));
      }
      return results;
    }

    var rows = partition(this.props.tiles, this.props.columns).map((tiles) => <Row row={tiles} />);

    return <table className="board">{rows}</table>
  }
});

var Row = React.createClass({
  render() {
    var tds = this.props.row.map((tile) => <Tile index={tile}/>);

    return <tr className="row">{tds}</tr>
  }
});

var Tile  = React.createClass({
  render() {
    var index = this.props.index;

    return <td className="tile" isExposed="false" >{index}</td>
  }
});

ReactDOM.render(<Minesweeper/>, document.getElementById('container'));
