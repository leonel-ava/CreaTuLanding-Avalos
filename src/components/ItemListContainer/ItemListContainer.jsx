import { useState } from "react";
import { products as allProducts } from "../../data/products";

import { Box, Button, Center, Heading, Image, SimpleGrid, Text } from "@chakra-ui/react";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";

function ItemListContainer() {
    const [products] = useState(allProducts);

    return (
        <Box>
            <Center>
                <Heading>Productos</Heading>
            </Center>

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
                                <Text
                                    fontWeight="bold"
                                    fontSize="l"
                                >
                                    {product.name}
                                </Text>

                                <Center>
                                    <Text fontSize="md">${product.price.toLocaleString("es-ES")}</Text>
                                </Center>
                            </Box>
                        </Center>

                        <Center>
                            <Button
                                leftIcon={<FaEye />}
                                variant="outline"
                                as={Link}
                                to={`/product/${product.id}`}
                            >
                                Ver Producto
                            </Button>
                        </Center>
                    </Box>
                ))}
            </SimpleGrid>
        </Box>
    );
}

export default ItemListContainer;