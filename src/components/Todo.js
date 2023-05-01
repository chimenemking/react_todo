import React from 'react'

const Todo = ({text,todo,todos,setTodos}) => {
    //Events 
    const deleteHandler = ()=>{
        setTodos(todos.filter(el=> el.id!== todo.id))
    }
    const completeHandler =()=>{
        setTodos(todos.map(item=>{
            if(item.id === todo.id){
                return{
                    ...item, completed: !item.completed
                }
            }
            return item;
        }))
    }
  return (
    <div className='todo'>
        <li className={`todo-item ${todo.completed?'completed':''}`}>{text}</li>
        <button onClick={completeHandler} className='complete-btn'><i className='fas fa-check'></i></button>
        <button onClick={deleteHandler} className='trash-btn'><i className='fas fa-trash'></i></button>
    </div>
  )
}
//with props , update the the  element with props, so it doesnt display static text all the time add {text} to the props 
export default Todo

//state can only be passed downwards from parent to child, thats why we need to pass the setTodo state from app to todo component , because we need the setTodo in the deleteHandler

//using css to dynamically update our styling in the li element classname ={`todo-item ${todo.completed?"completed":''}`}
//todo-item' represents the intital classname which has the initial stylying and the other statement means if the todo.completed is true , add a class of 'completed ' to the the styling