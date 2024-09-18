import "./index.css";

import { extendTheme } from "@chakra-ui/react";
import { createRoot } from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import { CartProvider } from "./contexts/cart.jsx";
import App from "./App.jsx";

const colors = {
    // Tal vez le vaya a dar uso en un futuro
};

const theme = extendTheme({ colors });

createRoot(document.getElementById("root")).render(
    <CartProvider>
        <ChakraProvider theme={theme}>
            <App />
        </ChakraProvider>
    </CartProvider>,
);