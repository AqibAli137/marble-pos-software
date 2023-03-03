import { configureStore } from "@reduxjs/toolkit";
import SaleItemSlice from "./@features/SaleItems/SaleItemSlice";
import aquaReducer from "./@features/AquaBill/AquaBillSlice";
import ItemListSlice from "./@features/ItemListSlice/ItemListSlice";

export const store = configureStore({
  reducer: {
    sale: SaleItemSlice,
    aquaBill: aquaReducer,
    Item : ItemListSlice
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
