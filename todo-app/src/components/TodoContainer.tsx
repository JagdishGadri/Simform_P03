// Functional Component
import { useEffect, useState } from "react";

import Header from "./Header/Header";
import TodoList from "./TaskData/TodoList";
import AddTodoField from "./Footer/AddTodoField";

import styled from "./TodoContainer.module.css";

// Getting Array of Data From Local Storage with Key Of "TodoList"

const getLocalItems = () => {
  let storageList = localStorage.getItem("TodoList");

  if (storageList) {
    return JSON.parse(localStorage.getItem("TodoList")!);
  } else {

    return [];}
};


const TodoContainer = () => {
  const [todos, setTodos] = useState(getLocalItems);
  const [newDate, setDate] = useState(new Date().getDate());

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
