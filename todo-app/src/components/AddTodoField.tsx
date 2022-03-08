import React,{useState} from 'react'
import AddTodo from './AddTodo';
import TodoInput from './TodoInput';


function AddTodoField(props:any) {
    const [showButton,setShowButton]=useState(true);

    const showButtonHandler = () =>{
        setShowButton(false);
    }

    const hideInputHandler=()=>{
      setShowButton(true);
    }

    const enteringDataHandler=(newTodo:any)=>{
        const todoData = {
          ...newTodo,
      
        }
        props.onEnteringData(newTodo);
    }


  return (
   

    <div>
         {console.log("AddTododField Component mounted")}
         {showButton && <AddTodo onClick={showButtonHandler}/>}
         {!showButton && <TodoInput onESCPress={hideInputHandler} onEnteringData={enteringDataHandler}/>}
    </div>
  )
}

export default AddTodoField;