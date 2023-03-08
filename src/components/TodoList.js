import React from "react";
// import the todo component 
import Todo from './Todo';

const TodoList =({todos,setTodos,filtredTodos})=>{
    return(
        <div className="todo-container">
        <ul className="todo-list">
            {filtredTodos.map(todo =>
            (
            <Todo key ={todo.id} 
            todo={todo}
            text={todo.text} 
            todos={todos} 
            setTodos={setTodos} 
            />
             ))}
        </ul>
      </div>
    );
}
export default TodoList;