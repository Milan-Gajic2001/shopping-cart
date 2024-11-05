import { createSlice } from "@reduxjs/toolkit";
import { removeItemByID } from "../functions";

const initialState = {cart:[]};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers:{
        addProduct(state,action){
            const {newMeal} = action.payload;
            // Checking if the meal is already in cart 
            const alreadyIn = state.cart.some(meal=> meal.id === newMeal.id);
            if(!alreadyIn){
                const updatedCart = state.cart.slice();
                const meal = {
                    id: newMeal.id,
                    name: newMeal.name,
                    price: newMeal.price,
                    description: newMeal.description,
                    quantity:1,
                    totalPrice: newMeal.price,
                } 
                updatedCart.push(meal);
                state.cart = updatedCart;
            }
        },
        reduceMealQuantity(state,action){
            const meal = state.cart.find(m=> m.id === action.payload.id);
            meal.quantity = meal.quantity - 1;
            meal.totalPrice = meal.quantity * meal.price;
            if(meal.quantity === 0){
                const updatedCart = removeItemByID(state.cart, meal.id);
                state.cart = updatedCart;
            }
        },
        addMealQuantity(state,action){
            const meal = state.cart.find(m=> m.id === action.payload.id);
            meal.quantity = meal.quantity + 1;
            meal.totalPrice = meal.quantity * meal.price;
        },
        emptyCart(state){
            state.cart = [];
        }
    }
})

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;