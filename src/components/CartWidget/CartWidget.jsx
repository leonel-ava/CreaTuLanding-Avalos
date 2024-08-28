import { IconButton, Badge, Box } from "@chakra-ui/react";
import { FaShoppingCart } from "react-icons/fa";

function CartWidget({ amount }) {
    return (
        <Box
            position="relative" 
            display="inline-block"
        >
            <IconButton
                icon={<FaShoppingCart />}
                aria-label="Cart"
            />
                <Badge
                    colorScheme="blue"
                    borderRadius="full"
                    position="absolute"
                    top="-5px"
                    right="-10px"
                    padding="0.2em 0.5em"
                >
                    {amount}
                </Badge>
        </Box>
    );
}

export default CartWidget;