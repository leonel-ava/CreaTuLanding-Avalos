import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import { Box, Heading, IconButton, Image, Spinner, Stack, Text, Button } from "@chakra-ui/react";
import { FaMinus, FaPlus } from "react-icons/fa6";

import { getProductById } from "../../data/products";
import { useCart } from "../../hooks/useCart";

function ItemDetailContainer() {
    const { id } = useParams();
    const { getProductInCart, addProduct, removeProduct } = useCart();

    const [product, setProduct] = useState(null);

    const cartProduct = getProductInCart(product);

    useEffect(() => {
        setTimeout(() => {
            setProduct(getProductById(id));
        }, 500);
    }, [id]);

    if (!product) {
        return (
            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                height="80vh"
            >
                <Spinner size="xl" />
            </Box>
        );
    }

    return (
        <Box
            p={8}
            maxWidth="600px"
            margin="0 auto"
            mt={8}
            boxShadow="md"
            borderRadius="md"
            bg="white"
        >
            <Stack
                direction="column"
                alignItems="center"
            >
                <Image
                    src={product.imageUrl}
                    alt={product.name}
                    borderRadius="md"
                />

                <Heading size="lg">{product.name}</Heading>

                <Text fontSize="xl">${product.price.toLocaleString("es-ES")}</Text>

                <Stack
                    direction="row"
                    spacing={4}
                >
                    <IconButton
                        icon={<FaMinus />}
                        isRound={true}
                        variant="outline"
                        aria-label="Quitar del carrito"
                        onClick={() => removeProduct(product)}
                    />

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
                </Stack>
            </Stack>
        </Box>
    );
}

export default ItemDetailContainer;