
export const addItemToCart = (cartItems, product) => {
        if (cartItems.find(item => item.id === product.id)) {
                return cartItems.map(item => (item.id === product.id)
                        ? { ...item, xAdded: item.xAdded + 1 }
                        : item);
        }
        return [ ...cartItems, { ...product, xAdded: 1 } ];
}

export const removeItemFromCart = (cartItems, id) => {
        if (cartItems.find(item => item.id === id).xAdded > 1) {
                return cartItems.map(item => (item.id === id)
                        ? { ...item, xAdded: item.xAdded - 1 }
                        : item);
        }
        return cartItems.filter(item => item.id !== id);
}