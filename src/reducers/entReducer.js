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
        getEntNewsFailure: (state) => {
            state.isLoading = false
        }
    }
})
export const { getEntNews, getEntNewsSuccess, getEntNewsFailure } = entReducer.actions;

export default entReducer.reducer