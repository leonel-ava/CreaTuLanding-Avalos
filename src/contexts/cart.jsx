import { createContext, useState } from 'react';

export const CartContext = createContext();

export function CartProvider({ children }) {
    const [products, setProducts] = useState([]);

    const getProductInCart = (product) => {
        return products.find(cartProduct => cartProduct.id == product.id);
    };

    const getProductInCartIndex = (product) => {
        return products.findIndex(cartProduct => cartProduct.id === product.id);
    };

    const setProductQuantity = (product, quantity) => {
        if (quantity <= 0) {
            removeProduct(product);
            return;
        }

        const productIndex = getProductInCartIndex(product);
        if (productIndex >= 0) {
            const updatedProducts = [
                ...products.slice(0, productIndex),
                { ...products[productIndex], quantity },
                ...products.slice(productIndex + 1)
            ];

            setProducts(updatedProducts);
        }
    };

    const addProduct = (product) => {
        const productIndex = getProductInCartIndex(product);
        if (productIndex >= 0) {
            setProductQuantity(product, products[productIndex].quantity + 1);
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
            clearCart,
            setProductQuantity
        }}>
            {children}
        </CartContext.Provider>
    );
}