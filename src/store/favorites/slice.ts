import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: Parking[] = [];

const favoritesSlice = createSlice({
    name: "favorites",
    initialState,
    reducers: {
        add: (state, action: PayloadAction<Parking>) => {

            // Mutable manier - Door het IMMER package
            // state.push(action.payload);

            // Immutable manier
            return [...state, action.payload];
        },
        remove: (state, action: PayloadAction<string>) => {

            return state.filter(f => f.id !== action.payload);

        },
    }
})

const {reducer, actions} = favoritesSlice;
export const {add, remove} = actions;
export default reducer;