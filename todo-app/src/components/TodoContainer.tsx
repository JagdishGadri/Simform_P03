// Functional Component

import Header from "./Header";
import TodoList from "./TodoList";
import AddTodo from "./AddTodo";
import "./TodoContainer.css";


const TodoContainer= () => {
  const todos= [
    {
      detail: "Buy sweatshirt",
      id: 1,
    },
    {
      detail: "Begin Promotional phase",
      id: 2,
    },
    {
      detail: "Read an Article",
      id: 3,
    },
    {
      detail: "Try not to fall asleep",
      id: 4,
    },
    {
      detail: "Watch sherlock",
      id: 5,
    },
    {
      detail: "Begin QA for the product.",
      id: 6,
    },
    {
      detail: "Go for a Walk",
      id: 7,
    },
  ];
  return (
    <div className="todo_container">
      <Header />
      <TodoList dataItems={todos} />
      <AddTodo />
    </div>
  );
};

export default TodoContainer;
