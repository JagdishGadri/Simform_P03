// Functional Component

import Header from "./Header";
import TodoList from "./TodoList";
import AddTodo from "./AddTodo";
import "./TodoContainer.css";
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
  let storageList = localStorage.getItem("todo");

  if (storageList) {
    return JSON.parse(localStorage.getItem("todo")!);
  } else {
    return [];
  }
};

const default_todos: any = [
  // {
  //   detail: "Buy sweatshirt",
  //   id: 1,
  // },
  // {
  //   detail: "Begin Promotional phase",
  //   id: 2,
  // },
  // {
  //   detail: "Read an Article",
  //   id: 3,
  // },
  // {
  //   detail: "Try not to fall asleep",
  //   id: 4,
  // },
  // {
  //   detail: "Watch sherlock",
  //   id: 5,
  // },
  // {
  //   detail: "Begin QA for the product.",
  //   id: 6,
  // },
  // {
  //   detail: "Go for a Walk",
  //   id: 7,
  // },
];



const TodoContainer = () => {
  const [todos, setTodos] = useState(getLocalItems);
  const [newMin, setNewMin] = useState(new Date().getMinutes());
  const [isSameDate,setIsSameDate]=useState(true);

  let todo_date=parseInt(localStorage.getItem('time')!);
  console.log(`"Hi"${todo_date}`)

  // setInterval(()=>{setNewMin(new Date().getDate())
  //   console.log(`setInterval${newMin}`)
  // },1000)

  // if()
  


  console.log(newMin)

  // if(newMin!==todo_date){
  //   setIsSameDate(true);
  // }

  useEffect(()=>{
    if(newMin!==todo_date){
      localStorage.clear();
      setTodos(getLocalItems);
      console.log("if ran in useeffect")
    }
    console.log("useEffect ran")
    console.log(newMin)
  },[newMin]);

 

  // const addTodoHandler = (newTodo)=>{
  //   setTodos(prevTodos => {
  //     return [todos,...prevTodos];
  //   });
  // };

  const enteringDataHandler = (newTodo: any) => {
    console.log(newTodo)
    setTodos([...todos, newTodo]);
  };

  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todos));
  }, [todos]);


  // localStorage.setItem("todo",JSON.stringify(todos))

  // useEffect(()=>{
  //   localStorage.setItem(newTodo)
  // },[todos])

  // const removeData = () =>{
  //   localStorage.clear();
  // }

  return (
    <div className="todo_container">
      {console.log("TodoContainer Component mounted")}
      <Header />
      <TodoList dataItems={todos} />
      <AddTodoField onEnteringData={enteringDataHandler} />
      {/* <button onClick={removeData}>clear data</button> */}
    </div>
  );
};

export default TodoContainer;
