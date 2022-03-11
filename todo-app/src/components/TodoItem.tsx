// Stateful Functional Component

import React, { useState } from "react";

import styled from "./TodoItem.module.css";

type todoItemProps={
    detail:string,
    key:number,
    id:number
};                                              


function TodoItem(props:todoItemProps) {
  const [isChecked, setIsChecked] = useState(true);

  const checkboxHandler = () => {
    
    if (!isChecked) {
      setIsChecked(true);
      console.log("if ran");
      localStorage.setItem(JSON.stringify(props.id),JSON.stringify(isChecked))
    } else {
      setIsChecked(false); 
      console.log("else ran");
      localStorage.setItem(JSON.stringify(props.id),JSON.stringify(isChecked))
    }
  };
  


  

  return (
  
    <div className={styled.todo_item}>
      <div
        className={styled.todo_detail}
        style={{ color: JSON.parse(localStorage.getItem(JSON.stringify(props.id))!) ? "rgb(155, 150, 150)" : "black" }}
      >
        {props.detail}
      </div>
      <div>
        <input
          type="checkbox"
          className={styled.todo_checkbox}
          defaultChecked= {JSON.parse(localStorage.getItem(JSON.stringify(props.id))!)}
          onChange={checkboxHandler}
        />
      </div>
    </div>
  );
}

export default TodoItem;
