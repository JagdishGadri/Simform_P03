// Functional Component

import { object } from "prop-types";
import TodoItem from "./TodoItem";
import "./TodoList.css";

type todoListProps={
  dataItems :{
    detail:string;
    id:number;
  }[]
};

const TodoList = (props:todoListProps) => {
  return (
    <div className="todo_list">
      {props.dataItems.map((todo) => (
        <TodoItem 
        key={todo.id} 
        detail={todo.detail} 
        />
      ))}
    </div>
  );
};

export default TodoList;
