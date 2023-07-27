import { Box } from "@chakra-ui/react";
import Square from "./Square";
import { arrayEquals } from "../features/array";

interface Props {
  currentRow: number;
  items: number;
  values: Array<string | null>;
  winnerLine: Array<Array<number>> | null;
  onSquareClick: (row: number, col: number) => void;
}

const BoardRow: React.FC<Props> = ({
  currentRow,
  items,
  values,
  winnerLine,
  onSquareClick,
}) => {
  let boardRow = [];
  for (let i = 0; i < items; i++) {
    boardRow.push(
      <Square
        key={i}
        value={values[i]}
        winner={
          winnerLine
            ? winnerLine.some((e) => arrayEquals(e, [currentRow, i]))
            : false
        }
        onClick={() => onSquareClick(currentRow, i)}
      />
    );
  }
  return <Box display="block">{boardRow}</Box>;
};

export default BoardRow;
