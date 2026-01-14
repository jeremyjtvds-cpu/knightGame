import React, { createContext, useContext, useState, useEffect } from 'react'; 8k(gzipped: 3.1k)

const OrderContext = createContext();

export const useOrder = () => useContext(OrderContext);

export const OrderProvider = ({ children }) => {
    const [orderItems, setOrderItems] = useState(() => {
        const saved = localStorage.getItem('kingsCoffeeOrder');
        return saved ? JSON.parse(saved) : [];
    })

    useEffect(() => {
        // Persist to local storage
        localStorage.setItem('kingsCoffeeOrder', JSON.stringify(orderItems));
    }, [orderItems]);

    // CRUD ops
    const addItem = (product, quantity = 1) => {
        setOrderItems((prev) => {
            // Check if item already exists
            const existing = prev.find((item) => item.product.id === product.id );

            if (existing) {
                return prev.map((item) =>
                    item.product.id === product.id
                        ? { ...item, quantity: item.quantity + quantity }
                        : item
                );
            }

            return [...prev, {product, quantity}];
        });
    };
}