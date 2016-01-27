var Minesweeper = React.createClass({
  render() {
    return (
      <div>
        <Board columns={9} rows={9} />
      </div>
    );
  }
});

var Tile  = React.createClass({
  render() {
    var index = this.props.index;
    return <div className="tile">{index}</div>
  }
});

var Board = React.createClass({
  render() {
    var numberOfRows = this.props.rows
      , numberOfColumns = this.props.columns
      , columns = Array.apply(null, Array(numberOfColumns)).map((x, i) => { return i; })
      , board = columns.map((square, index) => {
            var row = Array.apply(null, Array(numberOfRows)).map(() => { return <Tile index={index} />; });
            return <div className="row">{row}</div>
          });

    return <div className="board">{board}</div>;
  }
});

ReactDOM.render(
  <Minesweeper/>,
  document.getElementById('container')
);
