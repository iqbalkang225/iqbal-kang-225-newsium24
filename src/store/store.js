import { configureStore } from "@reduxjs/toolkit";
import newsReducer from "../features/newsSlice";

const store = configureStore({
    reducer : {
        newsStore: newsReducer
    }
})

export default store