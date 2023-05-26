import { createSlice } from '@reduxjs/toolkit'

export const entReducer = createSlice({
    name: 'entertainment',
    initialState: {
        entertainment: [],
        isLoading: false
    },
    reducers: {
        // action creators 
        getEntNews: (state) => {
            state.isLoading = true
        },
        getEntNewsSuccess: (state, action) => {
            state.entertainment = action.payload
        },
    }
})
export const { getEntNews, getEntNewsSuccess } = entReducer.actions;

export default entReducer.reducer