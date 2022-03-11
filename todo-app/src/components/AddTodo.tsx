// Stateless Functional Component

import { log } from "console";
import React, { useState } from "react";

import styled from "./AddTodo.module.css"; 



type addTodoProps={
  onInputShow:Function;
}

function AddTodo(props:addTodoProps) {
  return (
    <>
      <button className={styled.add_todo} onClick={()=>props.onInputShow()}>
        <h2 >+</h2>
      </button>
    </>
  );
}

export default AddTodo;
