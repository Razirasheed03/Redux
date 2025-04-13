import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from "./CounterSlice";

const store=configureStore({
    reducer:{
        Counter:CounterReducer
    }
})
export default store