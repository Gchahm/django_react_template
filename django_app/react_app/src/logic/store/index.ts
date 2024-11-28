import {configureStore, createSlice} from "@reduxjs/toolkit";

const reducer = createSlice({
    name: 'reducer',
    initialState: {},
    reducers: {}
})

export const store = configureStore(
    {
        reducer: {
            reducer: reducer.reducer
        },
    }
)

