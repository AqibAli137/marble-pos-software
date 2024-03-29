import {createSlice} from '@reduxjs/toolkit'

const initialSaleCustomerstate = {
  isLoading: true,
  ListOfCustomers:[] as any,
  NewOrderCustomer:{} as any,
  ReturnItemCustomer:{} as any,
  WithOutProfit:true,
  withOutPayementDetail:true,
}

export const CustomerSlice = createSlice({
  name: 'customer',
  initialState: initialSaleCustomerstate,
  reducers: {
    UpdateAllCustomers: (state, {payload}) => {
      state.ListOfCustomers = payload
    },
    UpdateNewOrderCustomer: (state, {payload}) => {
      state.NewOrderCustomer = payload
    },
    UpdateProfitShow: (state, {payload}) => {
      state.WithOutProfit = payload
    },
    UpdatewithOutPayementDetail: (state, {payload}) => {
      state.withOutPayementDetail = payload
    },
    UpdateReturnItemCustomer: (state, {payload}) => {
      state.ReturnItemCustomer = payload
    }

  },
  extraReducers: (builder) => {},
})

export const {
  UpdateAllCustomers,
  UpdateNewOrderCustomer,
  UpdateProfitShow,
  UpdateReturnItemCustomer,
  UpdatewithOutPayementDetail
} = CustomerSlice.actions
export default CustomerSlice.reducer
