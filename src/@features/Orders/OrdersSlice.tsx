import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'

const initialOrdersState = {
  isLoading: true,
  ListOfOrders:[] as any,
  SelectedOrders: [] as any
}

export const OrdersSlice = createSlice({
  name: 'Order',
  initialState: initialOrdersState,
  reducers: {
    UpdateAllOrders: (state, {payload}) => {
      state.ListOfOrders = payload
    },
    UpdateSelectedOrders: (state, {payload}) => {
        state.SelectedOrders = payload
      },
   
  },
  extraReducers: (builder) => {},
})

export const {
  UpdateAllOrders,
  UpdateSelectedOrders
} = OrdersSlice.actions
export default OrdersSlice.reducer
