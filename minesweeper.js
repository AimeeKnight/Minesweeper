var COLUMNS = Array.apply(null, Array(9)).map(function (x, i) { return i; })

var Minesweeper = React.createClass({
  render: function() {
    var board = COLUMNS.map(function(square, index){
      var row = Array.apply(null, Array(9)).map(function (x, i) { return <span>{index}</span>; })
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
