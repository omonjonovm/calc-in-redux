import { createSlice } from "@reduxjs/toolkit";

const commonSlicer = createSlice({
    name: "counter",
    initialState: 0,
    reducers: {
        increment(state, { payload }) {
            return (state = payload[0] + payload[1])
        },
        decrement(state, { payload }) {
            return (state = payload[0] - payload[1])
        },
        kopaytirish(state, { payload }) {
            return (state = payload[0] * payload[1])
        },
        bulish(state, { payload }) {
            return (state = payload[0] / payload[1])
        },
        reset() {
            return 0;
        }
    }
})

export const { increment, kopaytirish, decrement, bulish, reset } = commonSlicer.actions
export default commonSlicer.reducer
