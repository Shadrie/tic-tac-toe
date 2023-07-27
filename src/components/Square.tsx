import { Button } from "@chakra-ui/react";
import { MouseEventHandler } from "react";

interface Props {
  value: string | null;
  winner: boolean;
  onClick: MouseEventHandler;
}

const Square: React.FC<Props> = ({ value, winner, onClick }) => {
  return (
    <Button
      borderRadius="0"
      height="4em"
      width="4em"
      onClick={onClick}
      bg={winner ? "teal.200" : "gray.50"}
      _hover={{ bg: winner ? "teal.300" : "gray.200" }}
    >
      {value}
    </Button>
  );
};

export default Square;
