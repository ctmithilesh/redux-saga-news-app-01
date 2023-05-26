import { createSlice } from '@reduxjs/toolkit'

export const todoReducer = createSlice({
    name: 'todos',
    initialState:[],
    reducers: {
        // action creators 
        addTodo:(state,action)=>{
            console.log(action)
            const newTodo = action.payload
            state.push(newTodo)

        }
    }
})
export const { addTodo } = todoReducer.actions;

export default todoReducer.reducer