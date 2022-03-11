// Functional Component

import Header from "./Header";
import TodoList from "./TodoList";
import AddTodo from "./AddTodo";
import styled from "./TodoContainer.module.css";
import TodoInput from "./TodoInput";
import AddTodoField from "./AddTodoField";
import { useEffect, useState } from "react";
// import AddTodoField from "./AddTodoField";

// let Sec = new Date().getSeconds();
// if (Sec <= 30) {
//   const getLocalItems = () => {
//     let storageList = localStorage.getItem("todo");

//     if (storageList) {
//       return JSON.parse(localStorage.getItem("todo")!);
//     } else {
//       return [];
//     }
//   };
// }
// else
// {
//   localStorage.clear();
// }

const getLocalItems = () => {
  let storageList = localStorage.getItem("TodoList");

  if (storageList) {
    return JSON.parse(localStorage.getItem("TodoList")!);
  } else {

    return [];}
};

// const default_todos: any = [];

const TodoContainer = () => {
  const [todos, setTodos] = useState(getLocalItems);
  const [newDate, setNewMin] = useState(new Date().getDate());

  const todo_date = parseInt(localStorage.getItem("TodoAddedOn")!);

  useEffect(() => {
    localStorage.setItem("TodoList", JSON.stringify(todos));
  }, [todos]);



  useEffect(() => {
    if (newDate !== todo_date) {
      localStorage.clear();
      setTodos(getLocalItems);
    }
  }, [newDate]);

  

  

  const enteringDataHandler = (newTodo:ArrayBuffer) => {
    setTodos([...todos, newTodo]);
  };

  return (
    <div className={styled.todo_container}>
      <Header />
      <TodoList dataItems={todos} />
      <AddTodoField onEnteringData={enteringDataHandler} />
    </div>
  );
};

export default TodoContainer;
