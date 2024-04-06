import { createSlice } from "@reduxjs/toolkit";

const initialState = "";

export const Role = createSlice({
    name: 'Role',
    initialState,
    reducers: {
        Roles: (state,action) => {
                state = action.payload
                return state
        },
       
    }
});

export const { Roles } = Role.actions;

export default Role.reducer;
