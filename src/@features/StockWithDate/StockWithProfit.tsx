import { createSlice } from "@reduxjs/toolkit";

const initialStockWithDateState = {
  isLoading: true,
  DateChange: [
    {
      startDate: new Date(),
      endDate: null,
      key: "selection",
    },
  ],
  startDate: "",
  endDate: "",
  filterList: [],
};

export const StockWithDateSlice = createSlice({
  name: "stochWithDate",
  initialState: initialStockWithDateState,
  reducers: {
    DateUpdate: (state, { payload }) => {
      state.DateChange = payload;
    },
    UpdateStartDate: (state, { payload }) => {
      state.startDate = payload;
    },
    UpdateEndDate: (state, { payload }) => {
      state.endDate = payload;
    },

    UpdateFilterList: (state, { payload }) => {
      state.filterList = payload;
    },
  },
  extraReducers: (builder) => {},
});

export const { DateUpdate, UpdateStartDate, UpdateEndDate,UpdateFilterList } = StockWithDateSlice.actions;
export default StockWithDateSlice.reducer;
