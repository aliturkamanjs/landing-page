import { FC } from "react";
import { Flex, Text } from "@chakra-ui/layout";
import { motion } from "framer-motion";

interface logocomp {
  showLogo: boolean;
}
const LogoComponent: FC<logocomp> = (props) => {
  const MotionText = motion(Text);
  const MotionFlex = motion(Flex);
  return (
    <MotionFlex
      display={props.showLogo ? "flex" : "none"}
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 1.8 }}
      justifyContent="center"
      alignItems="center"
      w="100%"
      h="100vh"
    >
      <MotionText
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4 }}
        fontSize={["40px", "60px", "60px", "60px", "60px"]}
        color="#f8fafd"
        fontFamily="Aquire"
      >
        moltycode
      </MotionText>
    </MotionFlex>
  );
};

export default LogoComponent;
