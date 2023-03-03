import {createSlice} from '@reduxjs/toolkit'

const initialSaleCustomerstate = {
  isLoading: true,
  ListOfCustomers:[] as any,
  NewOrderCustomer:{} as any,

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
    }

  },
  extraReducers: (builder) => {},
})

export const {
  UpdateAllCustomers,
  UpdateNewOrderCustomer
} = CustomerSlice.actions
export default CustomerSlice.reducer
