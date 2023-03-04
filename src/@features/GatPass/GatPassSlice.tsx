import {createSlice} from '@reduxjs/toolkit'

const initialGatPassState = {
  isLoading: true,
  ListOfGatPass:[] as any,
  NewOrderGatPass:[] as any,
}

export const GatPassSlice = createSlice({
  name: 'GatPass',
  initialState: initialGatPassState,
  reducers: {
    UpdateAllGatPass: (state, {payload}) => {
      state.ListOfGatPass = payload
    },
    UpdateCustomerGatPass: (state, {payload}) => {
      state.NewOrderGatPass = payload
    }

  },
  extraReducers: (builder) => {},
})

export const {
  UpdateAllGatPass,
  UpdateCustomerGatPass
} = GatPassSlice.actions
export default GatPassSlice.reducer
