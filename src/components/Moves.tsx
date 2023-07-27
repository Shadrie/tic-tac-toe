import { Link, List, ListItem, Switch } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
  history: Array<Array<Array<string | null>>>;
  currentMove: number;
  setCurrentMove: any;
}

const Moves: React.FC<Props> = ({ history, currentMove, setCurrentMove }) => {
  function jumpTo(nextMove: number) {
    setCurrentMove(nextMove);
  }

  const moves = history.map((squares, move) => {
    // Display coords in the move description
    function displayCoords(): string | void {
      const index = history.indexOf(squares);
      const oldSquares = history[index - 1];
      for (let i = 0; i < squares.length; i++)
        for (let j = 0; j < squares.length; j++) {
          if (squares[i][j] !== oldSquares[i][j]) {
            return ` (${i},${j})`;
          }
        }
      return;
    }

    let description = currentMove === move ? "You are at" : "Go to";
    description +=
      move === 0 ? " game start" : ` move # ${move}${displayCoords()}`;
    const fontWeight = currentMove === move ? "bold" : "";

    return (
      <ListItem key={move}>
        <Link fontWeight={fontWeight} onClick={() => jumpTo(move)}>
          {description}
        </Link>
      </ListItem>
    );
  });

  // Change moves order based on toggler value
  const [reverseOrder, setReverseOrder] = useState(false);
  const onReverseOrder = () => {
    setReverseOrder(!reverseOrder);
  };

  return (
    <>
      <Switch mb="3" onChange={onReverseOrder}>
        Reverse order
      </Switch>
      <List>{reverseOrder ? moves.reverse() : moves}</List>
    </>
  );
};

export default Moves;
