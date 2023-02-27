import { configureStore } from "@reduxjs/toolkit";
import SaleItemSlice from "./@features/SaleItems/SaleItemSlice";
import aquaReducer from "./@features/AquaBill/AquaBillSlice";

export const store = configureStore({
  reducer: {
    sale: SaleItemSlice,
    aquaBill: aquaReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
