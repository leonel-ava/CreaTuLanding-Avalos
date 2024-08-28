import {
    Box,
    Flex,
    Menu,
    Stack,
} from "@chakra-ui/react";
import CartWidget from "../CartWidget/CartWidget";

function Navbar({ itemsInCart }) {
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
                    fontSize="2xl"
                    fontWeight="bold"
                >
                    Diecast Collectors
                </Box>

                <Flex alignItems="center">
                    <Stack direction="row" spacing={7}>
                        <Menu>
                            <CartWidget amount={itemsInCart} />
                        </Menu>
                    </Stack>
                </Flex>
            </Flex>
        </Box>
    );
}

export default Navbar;