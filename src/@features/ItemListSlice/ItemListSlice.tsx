import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'
import { Item } from '../../Models/Item'

const initialSaleItemState = {
  isLoading: true,
  ListOfItems:[] as any,
  SelectedItem: {} as any
}

export const ItemListSlice = createSlice({
  name: 'sale',
  initialState: initialSaleItemState,
  reducers: {
    UpdateAllItems: (state, {payload}) => {
      state.ListOfItems = payload
    //   axios.get("https://localhost:7005/api/Item").then(
    //     (res)=>{
    //         state.ListOfItems= res as any;
    //     }
    //   )
    },
    UpdateSelectedItem: (state, {payload}) => {
        state.SelectedItem = payload
      },
   
  },
  extraReducers: (builder) => {},
})

export const {
  UpdateAllItems,
  UpdateSelectedItem
} = ItemListSlice.actions
export default ItemListSlice.reducer
