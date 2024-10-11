import { Box, Button, HStack, IconButton, Image, Text, VStack } from "@chakra-ui/react";
import { FaMinus, FaPlus, FaTrash } from "react-icons/fa6";
import { useCart } from "../../hooks/useCart";

function CartDetails({ isCheckout }) {
    const { cart, getProductInCart, addProduct, removeProduct, setProductQuantity } = useCart();

    const total = cart.reduce((sum, product) => sum + product.price * product.quantity, 0);

    const isCartEmpty = cart.length === 0;
    const shippingCost = isCartEmpty ? 0 : 5000;

    return (
        <Box>
            <VStack spacing={4} align="stretch">
                {cart.length > 0 ? (
                    cart.map((product) => {
                        const cartProduct = getProductInCart(product);

                        return (
                            <HStack
                                key={product.id}
                                justify="space-between"
                                align="center"
                                width="100%"
                            >
                                <HStack justify="start" align="center">
                                    <Image
                                        src={product.imageUrl}
                                        alt={product.name}
                                        boxSize="64px"
                                        objectFit="scale-down"
                                        borderRadius="md"
                                    />

                                    <Text fontWeight="bold">{product.name}</Text>

                                    {
                                        isCheckout ? (
                                            <Text fontSize="sm">x{cartProduct.quantity}</Text>
                                        ) : (
                                            <HStack spacing={4}>
                                                {cartProduct?.quantity > 1 ? (
                                                    <IconButton
                                                        icon={<FaMinus />}
                                                        isRound={true}
                                                        variant="outline"
                                                        aria-label="Quitar del carrito"
                                                        onClick={() => setProductQuantity(product, cartProduct.quantity - 1)}
                                                    />
                                                ) : (
                                                    <IconButton
                                                        icon={<FaTrash />}
                                                        isRound={true}
                                                        isDisabled={!cartProduct}
                                                        variant="outline"
                                                        aria-label="Eliminar del carrito"
                                                        onClick={() => removeProduct(product)}
                                                    />
                                                )}

                                                <Button variant="outline">
                                                    {cartProduct ? cartProduct.quantity : 0}
                                                </Button>

                                                <IconButton
                                                    icon={<FaPlus />}
                                                    isRound={true}
                                                    variant="outline"
                                                    aria-label="Agregar al carrito"
                                                    onClick={() => addProduct(product)}
                                                />
                                            </HStack>
                                        )
                                    }
                                </HStack>

                                <Text fontWeight="bold">${product.price.toLocaleString("es-ES")}</Text>
                            </HStack>
                        )
                    }
                    )) : (
                    <Text>No tienes productos en el carrito.</Text>
                )}
            </VStack>

            <Box
                mt={4}
                borderTop="1px"
                borderColor="gray.200"
                pt={4}
            >
                <HStack justify="space-between">
                    <Text>Subtotal</Text>
                    <Text fontWeight="bold">${total.toLocaleString("es-ES")}</Text>
                </HStack>

                <HStack justify="space-between">
                    <Text>Envío</Text>
                    <Text fontWeight="bold">${shippingCost.toLocaleString("es-ES")}</Text>
                </HStack>

                <HStack justify="space-between">
                    <Text fontSize="lg" fontWeight="bold">Total</Text>
                    <Text fontSize="lg" fontWeight="bold">
                        ${(total + shippingCost).toLocaleString("es-ES")}
                    </Text>
                </HStack>
            </Box>
        </Box>
    );
}

export default CartDetails;