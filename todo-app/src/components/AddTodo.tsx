// Stateless Functional Component

import { log } from "console";
import React, { useState } from "react";

import "./AddTodo.css"; 

// type addTodoProps={
//   choise:Boolean;
// }

function AddTodo(props:any) {
  const [state,setstate]=useState(false);

  const inputHandler=()=>{
       props.onAddClick(state);
  }

  return (
    <>
      <button className="add_todo" onClick={inputHandler}>
        <h2 >+</h2>
      </button>
    </>
  );
}

export default AddTodo;
