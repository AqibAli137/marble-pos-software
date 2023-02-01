import {configureStore} from "@reduxjs/toolkit";
import counterSlice from "./@features/counterSlice";
import SaleItemSlice from "./@features/SaleItems/SaleItemSlice";


export const store = configureStore({
    reducer: {
        counter: counterSlice,
        sale: SaleItemSlice,
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch