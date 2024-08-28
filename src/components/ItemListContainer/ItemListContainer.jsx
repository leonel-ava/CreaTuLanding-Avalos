import {
    SimpleGrid,
    Box,
    Text,
    Image,
    Center,
    Button
} from "@chakra-ui/react";
import { FaShoppingCart } from "react-icons/fa";

function ItemListContainer({ products, onAddToCart }) {
    return (
        <SimpleGrid
            columns={{ sm: 2, md: 3 }}
            spacing="40px"
            padding="100px"
        >
            {products.map((product) => (
                <Box
                    key={product.id}
                    overflow="hidden"
                >
                    <Center>
                        <Image 
                            src={product.imageUrl}
                            alt={product.name}
                        />
                    </Center>

                    <Center>
                        <Box padding="10px">
                            <Text fontWeight="bold" fontSize="l">
                                {product.name}
                            </Text>

                            <Center>
                                <Text fontSize="md">${product.price.toLocaleString("es-ES")}</Text>
                            </Center>
                        </Box>
                    </Center>

                    <Center>
                        <Button
                            leftIcon={<FaShoppingCart />}
                            variant="outline"
                            onClick={onAddToCart}
                        >
                            Añadir al Carrito
                        </Button>
                    </Center>
                </Box>
            ))}
        </SimpleGrid>
    );
}

export default ItemListContainer;