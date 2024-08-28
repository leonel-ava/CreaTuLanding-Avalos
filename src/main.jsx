import "./index.css";

import { extendTheme } from "@chakra-ui/react";
import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import App from "./App.jsx";

const colors = {
    // Tal vez le vaya a dar uso en un futuro
};

const theme = extendTheme({ colors });

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <ChakraProvider theme={theme}>
            <App />
        </ChakraProvider>
    </StrictMode>,
);