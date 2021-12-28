import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import theme from "./theme";
import { ChakraProvider } from "@chakra-ui/react";
import "./index.css";
import Fonts from "./fonts";

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <Fonts />
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
