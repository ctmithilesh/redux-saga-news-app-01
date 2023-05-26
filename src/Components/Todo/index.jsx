import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo } from '../../reducers/todoReducer'

export default function Todo() {

    const [todo,setData] = useState(null)
    const dispatch = useDispatch()
    const handleInputChange = (e)=>{
        const target = e.target 
        const name = target.name 
        if(name === "todo"){
            setData(target.value)

        }

    }
    const submitData = ()=>{
        console.log(todo)
        dispatch(addTodo(todo))
    }
    console.log('todo',todo)
  return (
    <div>
        <h1> Todo </h1>
            <input 
                name="todo"
                type="text"
                placeholder='Enter Todo'
                onChangeCapture={handleInputChange}
            />
            <button onClick={()=> submitData()}> Submit </button> 
    </div>
  )
}
