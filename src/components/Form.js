import React from "react";

const Form = ({setInputText, todos, setTodos,inputText,setStatus}) => {
  
  const inputTextHandler =(e)=>{
   console.log(e.target.value)
   setInputText(e.target.value)
  }
  const submitTodoHandler = (e)=>{
    e.preventDefault();
    setTodos([
      ...todos,
      {text: inputText ,completed: false, id: Math.random() *1000 }
    ]);
    setInputText(''); 
    // To make the state set to reset after the initial stage 
  }

  const statusHandler = (e)=>{
    setStatus(e.target.value)
  }

// To make the UI update with the state , add a value to the input element and set the value equal to the state, inputText
  return (
    <div>
      {" "}
      <form>
        <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input" />
        <button onClick={submitTodoHandler} className="todo-button" type="submit">
          <i className="fas fa-plus-square"></i>
        </button>
        <div className="select">
          <select onChange={statusHandler} name="todos" className="filter-todo">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
        </div>
      </form>
    </div>
  );
};

export default Form;
