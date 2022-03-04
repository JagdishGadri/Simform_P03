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
    } else {
      setIsChecked(false);
    }
  };

  return (
    <div className="todo_item">
      <label
        className="todo_detail"
        style={{ color: isChecked ? "rgb(155, 150, 150)" : "black" }}
      >
        {props.detail}
      </label>
      <div>
        <input
          type="checkbox"
          className="todo_checkbox"
          onChange={checkboxHandler}
          value="{isCompleted}"
        />
      </div>
    </div>
  );
}

export default TodoItem;
