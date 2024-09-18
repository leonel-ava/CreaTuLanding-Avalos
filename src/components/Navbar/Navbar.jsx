import { Box, Flex, Menu, Stack } from "@chakra-ui/react";
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <Box
            bg="white"
            px={4}
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

                <Flex alignItems="center">
                    <Stack direction="row" spacing={7}>
                        <Menu>
                            <CartWidget />
                        </Menu>
                    </Stack>
                </Flex>
            </Flex>
        </Box>
    );
}

export default Navbar;