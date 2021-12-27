import "./App.css";
import { FC } from "react";
import { Container, Heading, Text } from "@chakra-ui/layout";
import { Flex } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import ButtonComponent from "./components/buttonComponent";

const items = [
  { name: "GITHUB", id: 1, href: "https://github.com/MoltyCode" },
  { name: "YOUTUBE", id: 2, href: "https://www.youtube.com/channel/UC_xSsrvz8GTxQ7Ykj7XQ35w" },
  { name: "TELEGRAM", id: 3, href: "https://telegram.me/moltycode" },
  { name: "INSTAGRAM", id: 4, href: "https://www.instagram.com/moltycode/" },
  { name: "DISCORD", id: 5, href: "https://discord.gg/AptKJeUC" },
];

const App: FC = () => {
  return (
    <Container maxW="container.3xl" p="0px">
      <Flex h="100vh">
        <Flex
          bg="#0000005c"
          flex={1}
          flexDir="column"
          style={{ backdropFilter: "blur(20px)" }}
          color="#f8fafd"
          justifyContent="space-between"
        >
          <div className="blur-left"></div>
          <Flex ml="28" flexDir="column">
            <Heading mt="6" fontFamily="Aquire" fontSize="md">
              MOLTYCODE
            </Heading>
            <Heading fontFamily="Aquire" mt="20" size="2xl">
              social medias
            </Heading>
            <Text w="400px" color="gray.200" fontSize="15px" mt="2" >
              we are frontend developer and teach about frontend technologies
            </Text>
          </Flex>
          <Flex width="100%" mt="-40" alignItems="center" flexDir="column">
            {items.map((item) => {
              return <ButtonComponent href={item.href} key={item.id} name={item.name} />;
            })}
          </Flex>
          <Text zIndex="10" color="gray.400" mb="3" ml="28">© MoltyCode team</Text>
        </Flex>
        <Box className="right-box" flex={1}>
        <div className="blur-right"></div>
        </Box>
      </Flex>
    </Container>
  );
};

export default App;
