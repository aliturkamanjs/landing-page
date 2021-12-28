import { FC } from "react";
import { Box, Link } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";

interface ButtonProps {
  name: string;
  href: string;
}
const ButtonComponent: FC<ButtonProps> = (props): JSX.Element => {
  return (
    <Link href={props.href} isExternal _hover={{ textDecoration: "none" }}>
      <Box
        mt="5"
        rounded="4"
        p="2px"
        bg="linear-gradient(35deg, #00C2FF, #FA00FF)"
        w={["280px","280px","400px","400px","400px"]}
        className="hover-button"
      >
        <Button
          _active={{}}
          _focus={{}}
          h="45px"
          rounded="4"
          w="full"
          bg="#131313"
            color="#f8fafd"
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
