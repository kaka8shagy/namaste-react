import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [], // Example initial items
    },
    reducers: {
        // Redux uses Immer behind the scenes, so we can write "mutating" code here
        addItem: (state, action) => {
            const item = action.payload;
            const existingItem = state.items.find(i => i.id === item.id);
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.items.push({ ...item, quantity: 1 });
            }
        },
        removeItem: (state, action) => {
            console.log('before', current(state));
            const itemId = action.payload;
            state.items = state.items.filter(item => item.id !== itemId);
            console.log('after', current(state));
        },
        clearCart: (state) => {
            // you can also return it like this
            // return { items: [] };
            state.items = [];
        },
    },
});


export const { addItem, removeItem, clearCart, updateItemQuantity, setCartItems } = cartSlice.actions;

export default cartSlice.reducer;