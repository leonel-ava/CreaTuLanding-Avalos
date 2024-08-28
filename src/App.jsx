/*
    Inspiración: https://dafuqboom.shop/collections/all
*/

import "./App.css";

import {
    Box,
    Heading,
    Center
} from "@chakra-ui/react";
import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

import { 
    useState,
    useEffect
} from "react";

import { products } from "./data/products";

function App() {
    useEffect(() => {
        document.title = "Diecast Collectors";
    }, []);

    const [itemsInCart, setItemsInCart] = useState(0);

    const addToCart = () => {
        setItemsInCart(itemsInCart + 1);
    }

    return (

        <Box>
            <Navbar itemsInCart={itemsInCart}  />
            <Center>
                <Heading>Productos</Heading>
            </Center>
            <ItemListContainer 
                products={products}
                onAddToCart={addToCart}
            />
        </Box>
    );
}

export default App;
