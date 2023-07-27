const calculateWinner = (
  squares: Array<Array<string | null>>
): [string | null, Array<Array<number>> | null] => {
  // All possible winning combinations are cols, rows and diagonals.
  let lines = [];
  // All cols and rows.
  for (let i = 0; i < squares.length; i++) {
    let curCol = [];
    let curRow = [];
    for (let j = 0; j < squares.length; j++) {
      curCol.push([i, j]);
      curRow.push([j, i]);
    }
    lines.push(curCol, curRow);
  }
  // All diagonals
  let baseDia = [];
  let reverseDia = [];
  for (let i = 0; i < squares.length; i++) {
    baseDia.push([i, i]);
    reverseDia.push([i, squares.length - 1 - i]);
  }
  lines.push(baseDia, reverseDia);
  for (let i = 0; i < lines.length; i++) {
    // First item in the potentially winning combination.
    const winnerPrediction = squares[lines[i][0][0]][lines[i][0][1]];
    // If item is set, check other items in this winning combination.
    if (winnerPrediction) {
      let win = true;
      for (let j = 0; j < lines[i].length; j++) {
        // If not all of the items in the combination are the same, it's not a win. Break the cycle.
        if (winnerPrediction !== squares[lines[i][j][0]][lines[i][j][1]]) {
          win = false;
          break;
        }
      }
      // Winner found.
      if (win) {
        return [winnerPrediction, lines[i]];
      }
    }
  }
  return [null, null];
};

export default calculateWinner;
