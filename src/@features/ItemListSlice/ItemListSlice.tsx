import { createSlice} from "@reduxjs/toolkit";

const initialSaleItemState = {
  isLoading: true,
  ListOfItems: [] as any,
  ProfitItem: [] as any,
  SelectedItem: {} as any,
};

export const ItemListSlice = createSlice({
  name: "item",
  initialState: initialSaleItemState,
  reducers: {
    UpdateAllItems: (state, { payload }) => {
      state.ListOfItems = payload;
    },
    UpdateSelectedItem: (state, { payload }) => {
      state.SelectedItem = payload;
    },

    UpdateProfitItem: (state, { payload }) => {
      state.ProfitItem = payload;
    },
  },
  extraReducers: (builder) => {},
});

export const { UpdateAllItems, UpdateSelectedItem, UpdateProfitItem } = ItemListSlice.actions;
export default ItemListSlice.reducer;
