import React from "react";

const Form =({setInputText , inputText , todos , setTodos,setStatus})=>{
    // here we are going to write some javascript code ....and function 
    const inputTextHandler =(e)=>{
        setInputText(e.target.value);
    }
    const submitTodoHandler = (e) =>{
        e.preventDefault();
        setTodos([
            //if i have some todos just pass it first
            ...todos,{text: inputText ,completed:false, id: Math.random()*1000},
        ])
        setInputText("");
    };
    const statusHandler =(e)=>{
        setStatus(e.target.value);
    };
    return(
        <form>
      <input 
      value={inputText}
      onChange={inputTextHandler} type="text" className="todo-input" />
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
    );
}
export default Form;
