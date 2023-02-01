import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    count: 0,
    posts: [],
    isLoading: true
}

const url = "https://jsonplaceholder.typicode.com/posts";

export const getPostItems = createAsyncThunk('counter/getPostItems', async () =>{
    const resp = await axios(url);
    return resp.data;
})

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.count += 1;
        },
        decrement: (state) => {
            state.count -= 1;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getPostItems.pending, (state) => {
            state.isLoading = true;
        }).addCase(getPostItems.fulfilled, (state, action) => {
            state.isLoading = false;
            state.posts = action.payload
            console.log(state.posts);
            
        }).addCase(getPostItems.rejected, (state) => {
            state.isLoading = false;
        })
    }
})

export const { increment, decrement } = counterSlice.actions
export default counterSlice.reducer