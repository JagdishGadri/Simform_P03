// Stateless Functional Component

import styled from "./AddTodoButton.module.css";

type addTodoProps = {
  onInputShow: Function;
};

function AddTodo(props: addTodoProps) {
  return (
    <>
      <button className={styled.add_todo} onClick={() => props.onInputShow()}>
        <h2>+</h2>
      </button>
    </>
  );
}

export default AddTodo;
