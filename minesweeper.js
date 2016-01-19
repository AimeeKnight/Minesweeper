var columnLength = 9
  , rowLength = 9
  , COLUMNS = Array.apply(null, Array(columnLength)).map((x, i) => { return i; });

var Minesweeper = React.createClass({
  render () {

    var board = COLUMNS.map((square, index) => {
      var row = Array.apply(null, Array(rowLength)).map(() => { return <div className="tile">{index}</div>; });
      return <div>{row}</div>
    });

    return (
      <div>
        <div>{board}</div>
      </div>
    );
  }
});

ReactDOM.render(
  <Minesweeper/>,
  document.getElementById('container')
);
