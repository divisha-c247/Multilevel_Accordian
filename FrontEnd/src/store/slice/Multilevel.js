import { createSlice } from "@reduxjs/toolkit";

const initialState = "";

export const multilevel = createSlice({
    name: 'multilevel',
    initialState,
    reducers: {
        ActiveTab: (state,action) => {
                state = action.payload
                return state
        },
       
    }
});

export const { ActiveTab } = multilevel.actions;

export default multilevel.reducer;
