import { IconButton, Badge, Box } from "@chakra-ui/react";
import { FaShoppingCart } from "react-icons/fa";
import { useCart } from "../../hooks/useCart";

function CartWidget() {
    const { cart, setOpenDrawer } = useCart();

    return (
        <Box
            position="relative"
            display="inline-block"
        >
            <IconButton
                icon={<FaShoppingCart />}
                aria-label="Cart"
                onClick={() => {
                    setOpenDrawer("cart");
                }}
            />
            <Badge
                colorScheme="blue"
                borderRadius="full"
                position="absolute"
                top="-5px"
                right="-10px"
                padding="0.2em 0.5em"
            >
                {cart.length}
            </Badge>
        </Box>
    );
}

export default CartWidget;