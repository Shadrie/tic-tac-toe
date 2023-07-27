import {
  Flex,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
} from "@chakra-ui/react";

interface Props {
  resetGrid: any;
}

const GridSetter: React.FC<Props> = ({ resetGrid }) => {
  return (
    <Flex justify="center" align="center" mb="5">
      Field size:
      <NumberInput
        display="inline-block"
        size="lg"
        maxW="4rem"
        ml="1rem"
        defaultValue={3}
        min={3}
        max={6}
        onChange={resetGrid}
      >
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
    </Flex>
  );
};

export default GridSetter;
