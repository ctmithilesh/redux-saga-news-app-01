import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getEntNews } from "./reducers/entReducer";
import Todo from "./Components/Todo";

function App() {


  const dispatch = useDispatch()

  useEffect(()=>{

      dispatch(getEntNews())

  },[dispatch])


  return (
    <div className="App">
      <h1> I am News </h1>
      <Todo />
    </div>
  );
}

export default App;
