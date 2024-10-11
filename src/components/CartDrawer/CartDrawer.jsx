import {
    Drawer,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    DrawerHeader,
    DrawerBody,
    DrawerFooter,
    Button,
    HStack,
} from "@chakra-ui/react";

import { useCart } from "../../hooks/useCart";
import CartDetails from "../CartDetails/CartDetails";

function CartDrawer() {
    const { cart, clearCart, isOpenDrawer, setOpenDrawer } = useCart();

    const isCartEmpty = cart.length === 0;

    return (
        <Drawer isOpen={isOpenDrawer("cart")} onClose={() => setOpenDrawer("")} placement="right" size="md">
            <DrawerOverlay />
            <DrawerContent>
                <DrawerCloseButton />

                <DrawerHeader>Mi Carrito</DrawerHeader>

                <DrawerBody>
                    <CartDetails />
                </DrawerBody>

                <DrawerFooter>
                    <HStack width="100%" justify="space-between">
                        <Button
                            flex="1"
                            size="lg"
                            isDisabled={isCartEmpty}
                            onClick={clearCart}
                        >   
                            Vaciar Carrito
                        </Button>

                        <Button
                            flex="1"
                            colorScheme="blue"
                            size="lg"
                            isDisabled={isCartEmpty}
                            onClick={() => {
                                setOpenDrawer("checkout");
                            }}
                        >
                            Continuar
                        </Button>
                    </HStack>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    );
}

export default CartDrawer;