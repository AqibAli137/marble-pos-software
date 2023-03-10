import { configureStore } from "@reduxjs/toolkit";
import SaleItemSlice from "./@features/SaleItems/SaleItemSlice";
import aquaReducer from "./@features/AquaBill/AquaBillSlice";
import ItemListSlice from "./@features/ItemListSlice/ItemListSlice";
import CustomerSlice from "./@features/Customer/CustomerSlice";
import GatPassSlice from "./@features/GatPass/GatPassSlice";
import OrdersSlice from "./@features/Orders/OrdersSlice";
import PaymentRcvSlice from "./@features/Payment/PaymentSlice";
import  StockWithDateSlice  from "./@features/StockWithDate/StockWithProfit";


export const store = configureStore({
  reducer: {
    sale: SaleItemSlice,
    aquaBill: aquaReducer,
    Item : ItemListSlice,
    Customer : CustomerSlice,
    GatPass:GatPassSlice,
    Orders:OrdersSlice,
    PaymentRcv: PaymentRcvSlice,
    DateChange : StockWithDateSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
