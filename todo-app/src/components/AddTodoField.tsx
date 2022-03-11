import React,{useState} from 'react'
import AddTodo from './AddTodo';
import TodoInput from './TodoInput';

type addtodoFieldProps={
  onEnteringData:Function;
}

function AddTodoField(props:addtodoFieldProps) {
    const [showButton,setShowButton]=useState(true);

    const showButtonHandler = () =>{
        setShowButton(false);
    }

    const hideInputHandler=()=>{
      setShowButton(true);
    }

    const enteringDataHandler=(newTodo:Object)=>{
        const todoData = {
          ...newTodo,
        }
        props.onEnteringData(newTodo);
    }


  return (
   

    <div>
         {showButton && <AddTodo onInputShow={showButtonHandler}/>}
         {!showButton && <TodoInput onESCPress={hideInputHandler} onEnteringData={enteringDataHandler}/>}
    </div>
  )
}

export default AddTodoField;