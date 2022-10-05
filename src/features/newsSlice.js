import { createSlice } from "@reduxjs/toolkit";

const initialState = []

const newsSlice = createSlice({
    name: 'news',
    initialState,
    reducers: {
        insertNews(state,action) {
            return state = action.payload
        }
    }
})

export const {insertNews} = newsSlice.actions

export default newsSlice.reducer