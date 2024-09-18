import { useEffect, useState } from "react";
import { products as allProducts, categories, getCategoryById } from "../../data/products";

import { Box, Button, Center, Heading, Image, SimpleGrid, Text, Menu, MenuButton, MenuList, MenuItem, MenuItemOption, MenuGroup, MenuOptionGroup, MenuDivider } from "@chakra-ui/react";
import { FaEye } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { ChevronDownIcon } from "@chakra-ui/icons";

function ItemListContainer() {
    const { id } = useParams();

    const [products, setProducts] = useState(allProducts);

    const categoryName = id === undefined ? "Todo" : getCategoryById(id).name;

    useEffect(() => {
        setProducts(allProducts.filter(product => {
            return id === undefined || product.categoryId == id
        }));
    }, [id]);

    return (
        <Box>
            <Center flexDirection="column">
                <Heading mb={4}>Productos</Heading>

                <Menu>
                    <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                        {categoryName}
                    </MenuButton>
                    <MenuList>
                        {categories.map((category) => (
                            <MenuItemOption
                                key={category.id}
                                value={category.id}
                                as={Link}
                                to={`/category/${category.id}`}
                            >
                                {category.name}
                            </MenuItemOption>
                        ))}
                    </MenuList>
                </Menu>
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