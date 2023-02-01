import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'

const initialSaleItemState = {
  isLoading: true,
  orderList:[],
  oldOrderList:[],
  SaleItemState: {
    ItemName: '',
    ItemQuantity: 0,
    SetPrice: 0,
    YourBill: 0,
  },
  localObject: {},
}

export const SaleItemSlice = createSlice({
  name: 'sale',
  initialState: initialSaleItemState,
  reducers: {
    updateItemName: (state, {payload}) => {
      state.SaleItemState.ItemName = payload
    },
    updateItemQuantity: (state, {payload}) => {
      state.SaleItemState.ItemQuantity = payload
    },
  
    updateSetPrice: (state, {payload}) => {
      state.SaleItemState.SetPrice = payload
    },
    updateYourBill: (state, {payload}) => {
      state.SaleItemState.YourBill = payload
    },
    updateOrderList: (state, {payload}) => {
      state.orderList = payload
    },
    updateOldOrderList:(state, {payload}) => {
      state.orderList = payload
    },
    updateLocalObj: (state, {payload}) => {
      state.localObject = payload
    },
   
  },
  extraReducers: (builder) => {},
})

export const {
  
  updateYourBill,
  updateItemName,
  updateItemQuantity,
  updateSetPrice,
  updateOrderList,
  updateOldOrderList,
  updateLocalObj
} = SaleItemSlice.actions
export default SaleItemSlice.reducer
