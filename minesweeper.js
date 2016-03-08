class Tile {
  constructor(id) {
    this.id = id
    this.isMine = Math.round(Math.random()) === 1
  }
}

function initialBoard(rows, columns) {
  var tiles = [];

  for (var i = 1; i <= rows * columns; i++) {
    tiles.push(new Tile(i));
  }

  return {tiles};
}

var MinesweeperView = React.createClass({
  render() {
    const columns = 9;
    const rows = 9;
    var tiles = initialBoard(rows, columns).tiles;
    return (
      <div>
        <BoardView tiles={tiles} columns={columns} rows={rows} />
      </div>
    );
  }
});

var BoardView = React.createClass({
  render() {

    function partition(tiles, size) {
      var results = [];
      while (tiles.length) {
        results.push(tiles.splice(0, size));
      }
      return results;
    }

    var rows = partition(this.props.tiles, this.props.columns).map((tiles) => <RowView row={tiles} />);

    return <table className="board"><tbody>{rows}</tbody></table>
  }
});

var RowView = React.createClass({
  render() {
    var tds = this.props.row.map((tile) => <TileView tile={tile}/>);

    return <tr className="row">{tds}</tr>
  }
});

var TileView  = React.createClass({
  render() {
    var tile = this.props.tile;
    var classes;

    if (tile.isMine){
      classes = "tile isMine"
    } else {
      classes = "tile"
    }

    return <td className={classes} isExposed="false">{tile.id}</td>
  }
});

ReactDOM.render(<MinesweeperView/>, document.getElementById('container'));

