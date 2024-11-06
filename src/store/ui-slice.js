import { createSlice } from "@reduxjs/toolkit";

const initialState = {isVisible: false, isHamburgerVisible: false};


const uiSlice = createSlice({
    name: "ui",
    initialState,
    reducers:{
        toggle(state){
            state.isVisible = !state.isVisible;
        },
        toggleHambruger(state){
            state.isHamburgerVisible = !state.isHamburgerVisible;
        }
    }
})


export const uiActions = uiSlice.actions;

export default uiSlice.reducer;



