import { createSlice } from "@reduxjs/toolkit";

const initialState = {orders: []};

const ordersSlice = createSlice({
    name:'order',
    initialState,
    reducers:{
        addOrder(state,action){
            const updatedOrders = state.orders.slice();
            updatedOrders.push(action.payload.order);
            state.orders = updatedOrders;
            localStorage.setItem('order', JSON.stringify(state.orders));
            console.log(state.orders);
        }
    }
})



export const orderActions = ordersSlice.actions;

export default ordersSlice.reducer;