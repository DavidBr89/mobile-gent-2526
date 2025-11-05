import { createSlice, PayloadAction } from "@reduxjs/toolkit";


const counterSlice = createSlice(
    {
        name: "counter",
        initialState: 0,
        reducers: {
            addOne: (state) => {
                // state++;
                return state + 1;
            },
            minusOne: (state) => {
                return state - 1;
            },
            add: (state, {payload}: PayloadAction<number>) => {
                return state + payload;
            },
            minus: (state, action: PayloadAction<number>) => {

               return state - action.payload < 0 ? state : state - action.payload;
            },
            reset: () => {
                return 0;
            }
        }
    }
)

const {reducer, actions} = counterSlice;
export const {add, addOne, minus, minusOne, reset} = actions;
export default reducer;