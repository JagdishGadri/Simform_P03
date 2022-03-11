import { keyboardKey } from '@testing-library/user-event'
import { type } from '@testing-library/user-event/dist/type'
import React,{EventHandler, useCallback,useEffect,useState} from 'react'
import styled from  "./TodoInput.module.css"

type todoInputProps={
  onESCPress:Function,
  onEnteringData:Function

}

const TodoInput=(props:todoInputProps) =>{

  const [enteredDetail,setEnteredDetail] = useState("");


  const detailChangeHander= (event: { target: { value: React.SetStateAction<string> } })=>{
    setEnteredDetail(event.target.value)
  }

  //console.log(enteredDetail)

  // const enterHandler = () => {
  //   //event.preventDefault();
    // const newTodo ={
    //   detail: enteredDetail,
    // };
    // console.log(enteredDetail)
  // };

  document.addEventListener('keydown',(e)=>{
    if (e.key === 'Escape') {
      props.onESCPress()
    }
  })



  // React.KeyboardEvent<HTMLInputElement>
 
  const enterHandler =(event:React.KeyboardEvent) => {

    let eventTraget=(event.target as HTMLInputElement).value;

     if(event.key==='Enter'){
      if(eventTraget===""){
        window.alert("Enter valid Input")
      }
      else{
        console.log(eventTraget)
        const newTodo ={
          detail: enteredDetail,
          id: JSON.parse(localStorage.getItem(('TodoList'))!).length ,
        };
        localStorage.setItem('TodoAddedOn',JSON.stringify(new Date().getDate()))
        props.onEnteringData(newTodo);
        props.onESCPress()
      }
    }
  };
  

  return (
    <div>
      <input type="text" className={styled.todo_input} placeholder='Add something' onChange={detailChangeHander} onKeyDown={enterHandler} autoFocus/>
    </div>
  )
}

export default TodoInput;