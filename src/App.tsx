import { ChakraProvider, Box, theme, Heading } from "@chakra-ui/react";
import Game from "./components/Game";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box height="100vh" textAlign="center" px="3" py="5" fontSize="xl">
      <Heading mb="5">Tic-tac-toe</Heading>
      <Game />
    </Box>
  </ChakraProvider>
);
