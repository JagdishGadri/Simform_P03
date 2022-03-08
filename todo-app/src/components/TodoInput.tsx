import React,{useCallback,useEffect,useState} from 'react'
import "./TodoInput.css"

const TodoInput=(props:any) =>{

  const [enteredDetail,setEnteredDetail] = useState("");


  const detailChangeHander= (event:any)=>{
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


 
  const enterHandler =(event:any) => {
     if(event.key==='Enter'){
      if(event.target.value===""){
        window.alert("Enter valid Input")
      }
      else{
        console.log(event.target.value)
        const newTodo ={
          detail: enteredDetail,
          id: Math.random().toString()
        };
        localStorage.setItem('time',JSON.stringify(new Date().getDate()))
        props.onEnteringData(newTodo);
        event.target.value=""
      }
    }
  };
  
  

  // useEffect(() => {
  //   document.addEventListener("keydown", keyPressFunction);

  //   return () => {
  //     document.removeEventListener("keydown", keyPressFunction);
  //   };
  // }, [keyPressFunction]);


  return (
    <div>
      <input type="text" className="todo_input" placeholder='Add something' onChange={detailChangeHander} onKeyDown={enterHandler}/>
      {console.log("TodoInput Component mounted")}
    </div>
  )
}

export default TodoInput;