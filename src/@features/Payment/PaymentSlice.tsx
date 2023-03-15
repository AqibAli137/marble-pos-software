import { createSlice } from "@reduxjs/toolkit";

const initialPaymentRcvState = {
  isLoading: true,
  customerPaymentRcv: {} as any,
  CustomerPayments: [] as any,
};

export const PaymentRcvSlice = createSlice({
  name: "PaymentRcv",
  initialState: initialPaymentRcvState,
  reducers: {
    UpdateCustomerPaymentRcv: (state, { payload }) => {
      state.customerPaymentRcv = payload;
    },
    UpdateCustomerPayments: (state, { payload }) => {
      state.CustomerPayments = payload;
    },
  },
  extraReducers: (builder) => {},
});

export const { UpdateCustomerPaymentRcv, UpdateCustomerPayments } = PaymentRcvSlice.actions;

export default PaymentRcvSlice.reducer;
