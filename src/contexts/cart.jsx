import { createContext, useState } from 'react';

export const CartContext = createContext();

export function CartProvider({ children }) {
    const [products, setProducts] = useState([]);

    const getProductInCart = (product) => {
        return products.find(cartProduct => cartProduct.id == product.id);
    };

    const addProduct = (product) => {
        const existingIndex = products.findIndex(cartProduct => cartProduct.id === product.id);
        if (existingIndex >= 0) {
            const updatedProducts = [
                ...products.slice(0, existingIndex),
                { ...products[existingIndex], quantity: products[existingIndex].quantity + 1 },
                ...products.slice(existingIndex + 1)
            ];

            setProducts(updatedProducts);
            return;
        }

        const updatedProducts = [
            ...products,
            {
                ...product,
                quantity: 1
            }
        ];

        setProducts(updatedProducts);
    };

    const removeProduct = (product) => {
        setProducts(products.filter(cartProduct => cartProduct.id !== product.id));
    };

    const clearCart = () => {
        setProducts([]);
    };

    return (
        <CartContext.Provider value={{
            cart: products,
            getProductInCart,
            addProduct,
            removeProduct,
            clearCart
        }}>
            {children}
        </CartContext.Provider>
    );
}