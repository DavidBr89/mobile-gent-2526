import {configureStore} from "@reduxjs/toolkit";

import favoritesReducer, { reducer } from "./favorites/slice";

export const store = configureStore(
    {
        reducer: favoritesReducer
    }
);
