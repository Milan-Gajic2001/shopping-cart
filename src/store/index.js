import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cart-slice";
import uiReducer from "./ui-slice";
import ordersReducer from "./orders-slice";



const store = configureStore({
    reducer:{cart:cartReducer, ui: uiReducer, orders: ordersReducer},
})

export default store;