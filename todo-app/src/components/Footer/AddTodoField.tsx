// Functional Component using Conditional Rendering

import React, { useState } from "react";
import AddTodo from "./AddTodoButton";
import TodoInput from "./TodoInputField";

type addtodoFieldProps = {
  onEnteringData: Function;
};

function AddTodoField(props: addtodoFieldProps) {
  const [showButton, setShowButton] = useState(true);

  const showInputHandler = () => {
    setShowButton(false);
  };

  const hideInputHandler = () => {
    setShowButton(true);
  };

  const enteringDataHandler = (newTodo: Object) => {
    const todoData = {
      ...newTodo,
    };
    props.onEnteringData(newTodo);
  };

  return (
    <div>
      {showButton && <AddTodo onInputShow={showInputHandler} />}
      {!showButton && (
        <TodoInput
          onESCPress={hideInputHandler}
          onEnteringData={enteringDataHandler}
        />
      )}
    </div>
  );
}

export default AddTodoField;
