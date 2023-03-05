import {createSlice} from '@reduxjs/toolkit'

const initialPaymentRcvState = {
  isLoading: true,
  customerPaymentRcv:{} as any
}

export const PaymentRcvSlice = createSlice({
  name: 'PaymentRcv',
  initialState: initialPaymentRcvState,
  reducers: {
    UpdateCustomerPaymentRcv: (state, {payload}) => {
      state.customerPaymentRcv = payload
    }
  },
  extraReducers: (builder) => {},
})

export const {
  UpdateCustomerPaymentRcv,
} = PaymentRcvSlice.actions

export default PaymentRcvSlice.reducer
