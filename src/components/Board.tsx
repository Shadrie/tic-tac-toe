import { Box } from "@chakra-ui/react";
import BoardRow from "./BoardRow";
import calculateWinner from "../features/WinnerCalculator";

interface Props {
  xIsNext: boolean;
  squares: Array<Array<string | null>>;
  onPlay: any;
  grid: number;
}

const Board: React.FC<Props> = ({ xIsNext, squares, onPlay, grid }) => {
  // Do nothing if the square is in use or game is up
  const onSquareClick = (row: number, col: number) => {
    const [winner] = calculateWinner(squares);
    if (squares[row][col] || winner) {
      return;
    }
    const nextSquares = squares.slice();
    nextSquares[row][col] = xIsNext ? "X" : "O";
    onPlay(nextSquares);
  };

  const [winner, winnerLine] = calculateWinner(squares);
  const status = winner
    ? "Winner: " + winner
    : "Next player: " + (xIsNext ? "X" : "O");

  let board = [];
  for (let i = 0; i < grid; i++) {
    board.push(
      <BoardRow
        key={i}
        currentRow={i}
        items={grid}
        values={squares[i]}
        winnerLine={winnerLine}
        onSquareClick={onSquareClick}
      />
    );
  }
  return (
    <Box>
      <Box fontWeight="bold">
        {squares.every((el) => el.every((innerEl) => innerEl !== null)) &&
        !winnerLine
          ? "Game over"
          : status}
      </Box>
      {board}
    </Box>
  );
};

export default Board;
