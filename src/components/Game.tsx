import { useState } from "react";
import Board from "./Board";
import Moves from "./Moves";
import { Flex, SimpleGrid } from "@chakra-ui/react";
import GridSetter from "./GridSetter";

const Game: React.FC = () => {
  const [gridSize, setGridSize] = useState(3);
  const [history, setHistory] = useState([
    Array.from({ length: gridSize }, () =>
      new Array<string | null>(gridSize).fill(null)
    ),
  ]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const historyDeepCopy = JSON.parse(JSON.stringify(history));
  const currentSquares = historyDeepCopy[currentMove];

  // Update history and number of moves after each turn
  function handlePlay(nextSquares: Array<Array<string | null>>) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setCurrentMove(nextHistory.length - 1);
    setHistory(nextHistory);
  }

  // Reset grid on field size change
  const resetGrid = (v: number) => {
    setGridSize(v);
    setCurrentMove(0);
    setHistory([
      Array.from({ length: v }, () => new Array<string | null>(v).fill(null)),
    ]);
  };

  return (
    <>
      <GridSetter resetGrid={(v: number) => resetGrid(Number(v))} />
      <SimpleGrid columns={2} columnGap="3rem">
        <Flex direction="column" align="flex-end">
          <Board
            xIsNext={xIsNext}
            squares={currentSquares}
            onPlay={handlePlay}
            grid={gridSize}
          />
        </Flex>
        <Flex direction="column" textAlign="left">
          {history.length > 1 && (
            <Moves
              history={history}
              currentMove={currentMove}
              setCurrentMove={setCurrentMove}
            />
          )}
        </Flex>
      </SimpleGrid>
    </>
  );
};

export default Game;
