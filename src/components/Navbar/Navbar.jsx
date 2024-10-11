import { Box, Flex } from "@chakra-ui/react";
import CartWidget from "../CartWidget/CartWidget";
import CartDrawer from "../CartDrawer/CartDrawer";
import { Link } from "react-router-dom";

import { useCart } from "../../hooks/useCart";
import CheckoutDrawer from "../CheckoutDrawer/CheckoutDrawer";

function Navbar() {
    const { isOpenDrawer } = useCart();

    return (
        <Box
            bg="white"
            px={6}
            boxShadow="sm"
        >
            <Flex
                h={16}
                alignItems="center"
                justifyContent="space-between"
            >
                <Box
                    as={Link}
                    to="/"
                    fontSize="2xl"
                    fontWeight="bold"
                >
                    Diecast Collectors
                </Box>

                <CartWidget />

                {isOpenDrawer("cart") && <CartDrawer />}
                {isOpenDrawer("checkout") && <CheckoutDrawer />}
            </Flex>
        </Box>
    );
}

export default Navbar;