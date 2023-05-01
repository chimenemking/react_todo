import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos, setTodos, filteredTodos }) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {filteredTodos.map((todo) => (
          <Todo
            todo={todo}
            todos={todos}
            setTodos={setTodos}
            text={todo.text}
            key={todo.id}
          />
        ))}
      </ul>
    </div>
  );
};

//with props, add a text prop and pass the value of text i.e {todo.text}  , update the the  element with props, so it doesnt display static text all the time

export default TodoList;

// passing down the state of todos from the app component using todos={todos} to the TodoList component const TodoList =({todos})
