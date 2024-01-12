import { createSlice } from "@reduxjs/toolkit";

const initialAquaBillState = {
  isLoading: true,

  AuqaBillDrower: false,
  AquaBillDrawertable: "",
};

export const AquaBillSlice = createSlice({
  name: "AquaBill",
  initialState: initialAquaBillState,
  reducers: {
    updateAuqaBillDrower: (state, { payload }) => {
      state.AuqaBillDrower = payload;
    },
    updateAquaBillDrawertable: (state, { payload }) => {
      state.AquaBillDrawertable = payload;
    },
  },
  extraReducers: (builder) => {},
});

export const { updateAuqaBillDrower, updateAquaBillDrawertable } = AquaBillSlice.actions;
export default AquaBillSlice.reducer;
