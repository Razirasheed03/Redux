import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count: 0
}
const CounterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        incrementCounter: (state) => {
            state.count = state.count + 1
        },
        decrementCounter: (state) => {
            if (state.count > 0) {

                state.count = state.count - 1
            } else {
                console.log('not valid negative')
            }
        }
    }
})

export const { incrementCounter, decrementCounter } = CounterSlice.actions
export default CounterSlice.reducer