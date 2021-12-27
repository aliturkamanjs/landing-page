import "./App.css";
import { Container } from "@chakra-ui/layout";
import { FC } from "react";
import { Flex } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";

const App: FC = () => {
  return (
    <Container maxW="container.3xl" p="0px">
      <Flex h="100vh">
        <Box
          bg="#000"
          opacity="31%"
          flex={1}
        ></Box>
        <Box flex={1}></Box>
      </Flex>
    </Container>
  );
};

export default App;
