import React,{useState} from 'react'
import AddTodo from './AddTodo';
import TodoInput from './TodoInput';


function AddTodoField() {
    const [addButton,setAddButton]=useState(true);

    const AddClickHandler = () =>{
        setAddButton(false);
        console.log("addClickhander ran in filed")
    }


  return (
   

    <div>
         {addButton && <AddTodo onAddClick={AddClickHandler}/>}
         {!addButton && <TodoInput/>}
    </div>
  )
}

export default AddTodoField;