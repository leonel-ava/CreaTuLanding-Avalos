import { Box, Flex } from "@chakra-ui/react";
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";

function Navbar() {
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
            </Flex>
        </Box>
    );
}

export default Navbar;