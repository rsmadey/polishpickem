import "./SpreadSheet.css"

function SpreadSheet({players, games, picks}) {
  var selected_week = 0
  switch (window.location.pathname){
    case "/":
      selected_week = 0
      break;
    case "/week1":
      selected_week = 0
      break;
    case "/week2":
      selected_week = 1
      break;
    case "/week3":
      selected_week = 2
      break;
    case "/week4":
      selected_week = 3
      break;
    case "/week5":
      selected_week = 4
      break;
    case "/week6":
      selected_week = 5
      break;
    case "/week7":
      selected_week = 6
      break;
  }
  var location = window.location.pathname
  var playersRow = players.map(player => <th>{player}</th>)
  var MoneyWonRow = players.map(player => <th></th>)
  var TotalSeasonRow = players.map(player => <th></th>)
  var top_row;
  var bottom_row;
  var top = '';
  var table = [];
  for (var i =0; i < games[selected_week].length;i++){
    var game = games[selected_week][i]

    top = game[0]
    bottom = game[1]
    var bottom = game[1]

    top_row = [<th>{top}</th>]
    var top_row_picks = players.map(player => <th>{picks[selected_week][player][i] == top?'X':""}</th>);
    top_row = top_row.concat(top_row_picks)
    
    bottom_row = [<th>{bottom}</th>];
    var bottom_row_picks = players.map(player => <th>{picks[selected_week][player][i] == bottom?'X':""}</th>);
    bottom_row = bottom_row.concat(bottom_row_picks)
    
    table.push(<tr>{top_row}</tr>);
    table.push(<tr>{bottom_row}</tr>)
  }
//console.log(top)
//console.log(top_row)

return <div>
  <div className="table-wrap">
    <table className="spreadsheet">
      <thead>
        <tr>
          <th style={{ width: "128px" }}>Team</th>
          {playersRow}
        </tr>
        <tr>
          <th style={{ width: "128px" }}>Money Won</th>
          {MoneyWonRow}
        </tr>
        <tr>
          <th>Total Season</th>
          {TotalSeasonRow}
        </tr>
      </thead>
      <tbody>
        {table}
      </tbody>

</table>
</div>

</div>
}

export default SpreadSheet