import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getEntNews } from "./reducers/entReducer";

function App() {


  const dispatch = useDispatch()

  useEffect(()=>{

      dispatch(getEntNews())

  },[dispatch])


  return (
    <div className="App">
      <h1> I am News </h1>
    </div>
  );
}

export default App;
