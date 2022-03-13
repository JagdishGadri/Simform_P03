// Functional Component

import TodoItem from "./TodoItem";
import styled from "./TodoList.module.css";

// TypeCasting the props of TodoList Component

type todoListProps = {
  dataItems: {
    detail: string;
    id: number;
  }[];
};

const TodoList = (props: todoListProps) => {
  console.log();
  return (
    <div className={styled.todo_list}>
      {props.dataItems.length === 0 ? (
        <div>
          <h2 className={styled.empty_detail1}>Looks Empty! </h2>
          <h2 className={styled.empty_detail2}>Go Ahead And Plan Your Day.</h2>
        </div>
      ) : (
        <div>
          {props.dataItems.map((todo) => (
            <TodoItem id={todo.id} detail={todo.detail} key={todo.id} />
          ))}
        </div>
      )}
    </div>
  );
};

export default TodoList;
