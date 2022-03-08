// Stateful Functional Component

import React, { useState } from "react";

import "./TodoItem.css";

type todoItemProps={
    detail:string
    key:number
};

function TodoItem(props: todoItemProps) {
  const [isChecked, setIsChecked] = useState(false);

  const checkboxHandler = () => {
    if (!isChecked) {
      setIsChecked(true);
      localStorage.setItem('isChecked',JSON.stringify(isChecked))
    } else {
      setIsChecked(false);
      localStorage.setItem('isChecked',JSON.stringify(isChecked))
    }
    // localStorage.setItem('isChecked',JSON.stringify(isChecked));
  };

  return (
    <div className="todo_item">
      <div
        className="todo_detail"
        style={{ color: localStorage.getItem('isChecked') ? "rgb(155, 150, 150)" : "black" }}
      >
        {props.detail}
      </div>
      <div>
        <input
          type="checkbox"
          className="todo_checkbox"
          onChange={checkboxHandler}
          value="{isCompleted}"
        />
      </div>
      {console.log("TodoItem Component mounted")}
    </div>
  );
}

export default TodoItem;
