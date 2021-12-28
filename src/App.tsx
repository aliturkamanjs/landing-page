import ButtonComponent from "./components/buttonComponent";
import LogoComponent from "./components/logo";
import { FC, useEffect, useState } from "react";
import { Container, Heading, Text } from "@chakra-ui/layout";
import { Flex } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";
import "./App.css";

const items = [
  { name: "GITHUB", id: 1, href: "https://github.com/MoltyCode" },
  {
    name: "YOUTUBE",
    id: 2,
    href: "https://www.youtube.com/channel/UC_xSsrvz8GTxQ7Ykj7XQ35w",
  },
  { name: "TELEGRAM", id: 3, href: "https://telegram.me/moltycode" },
  { name: "INSTAGRAM", id: 4, href: "https://www.instagram.com/moltycode/" },
  { name: "DISCORD", id: 5, href: "https://discord.gg/AptKJeUC" },
];

const App: FC = () => {
  const [showLogo, setShowLogo] = useState<boolean>(false);

  useEffect(() => {
    setShowLogo(true);
    setTimeout(() => setShowLogo(false), 2000);
  }, []);

  const MotionTop = motion(Flex);
  const MotionText = motion(Text);
  const MotionFlex = motion(Flex);

  return (
    <Container maxW="container.3xl" p="0px">
      <LogoComponent showLogo={showLogo} />
      <Flex h="100vh" display={showLogo ? "none" : "flex"}>
        <Flex
          bg="#0000005c"
          flex={1}
          flexDir="column"
          style={{ backdropFilter: "blur(20px)" }}
          justifyContent="space-between"
        >
          <div className="blur-left"></div>

          <MotionTop
            initial={{ opacity: 0, y: -300 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            ml={["4", "4", "4", "8", "28"]}
            flexDir="column"
          >
            <Heading
              mt="6"
              fontFamily="Aquire"
              fontSize={["sm", "md", "md", "md", "md"]}
              color="#f8fafd"
            >
              MOLTYCODE
            </Heading>
            <Heading color="#f8fafd" fontFamily="Aquire" mt="20" size="2xl">
              social medias
            </Heading>
            <Text
              w={["250px", "400px", "400px", "400px", "400px"]}
              color="gray.200"
              fontSize="15px"
              mt="2"
            >
              we are frontend developer and teach about frontend technologies.
            </Text>
          </MotionTop>
          <MotionFlex
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            width="100%"
            mt="-40"
            alignItems="center"
            flexDir="column"
          >
            {items.map((item) => {
              return (
                <ButtonComponent
                  href={item.href}
                  key={item.id}
                  name={item.name}
                />
              );
            })}
          </MotionFlex>
          <MotionText
            initial={{ opacity: 0, x: -300 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            zIndex="10"
            color="gray.400"
            mb="3"
            ml={["4", "4", "4", "8", "28"]}
            fontSize="12px"
          >
            © MoltyCode team
          </MotionText>
        </Flex>
        <Box
          display={["none", "none", "none", "block", "block"]}
          className="right-box"
          flex={1}
        >
          <div className="blur-right"></div>
        </Box>
      </Flex>
    </Container>
  );
};

export default App;
