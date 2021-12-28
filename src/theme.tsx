import { extendTheme } from "@chakra-ui/react";
const config = {
  initialColorMode: "light",
  useSystemColorMode: true,
  fonts: {
    body: 'Aquire',
  },
};
const theme = extendTheme({ config });
export default theme;
