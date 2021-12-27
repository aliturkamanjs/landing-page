import { Button } from "@chakra-ui/button";
import { Box, Link } from "@chakra-ui/layout";
import { FC } from "react";

interface ButtonProps {
  name: string;
  href: string;
}
const ButtonComponent: FC<ButtonProps> = (props): JSX.Element => {
  return (
    <Link href={props.href} isExternal _hover={{ textDecoration: "none" }}>
      <Box
        mt="5"
        _hover={{ bg: "linear-gradient(35deg, #ffc400, #7a037c)" }}
        rounded="4"
        p="2px"
        bg="linear-gradient(35deg, #00C2FF, #FA00FF)"
        w="400px"
        
      >
        <Button
          _active={{}}
          _focus={{}}
          h="45px"
          rounded="4"
          w="full"
          bg="#131313"
          _hover={{}}
          zIndex="10"
        >
          {props.name}
        </Button>
      </Box>
    </Link>
  );
};

export default ButtonComponent;