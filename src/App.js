import React ,{useState,useEffect}from 'react'; 
import './App.css';
import Form from './components/Form'
import TodoList from './components/TodoList';


function App() {
  //all our state stuff 
  const [inputText , setInputText]  = useState("");
  const [todos,setTodos]  = useState([]);
  const [status,setStatus] = useState("all")
  const [filtredTodos,SetFiltredTodos] = useState([]);
  // run once when the app start 
  useEffect(()=>{
    getLocalTodos();  
  },[])
  //use effect
   useEffect(()=>{
    filterHandler();
    saveLocalTodos();
    },
   [todos,status]
   );
  //Here we'll filter our todos based on status 
  const filterHandler= () =>{
    switch (status) {
      case 'completed':
        SetFiltredTodos(todos.filter(todo=>todo.completed===true));
        break;
      case 'uncompleted':
          SetFiltredTodos(todos.filter(todo=>todo.completed===false));
          break;
      default:
        SetFiltredTodos(todos);
        break;
    }
  };

  //try some storage saving 
  const saveLocalTodos = () => {
  localStorage.setItem("todos",JSON.stringify(todos))
};

const getLocalTodos = () => {
  if(localStorage.getItem("todos") === null){
     localStorage.setItem("todos", JSON.stringify([]))
  }  
    else{
      let todoLocal=JSON.parse(localStorage.getItem("todos"));
      setTodos(todoLocal);
    }
};
  return (
    <div className="App">
      <header>
         <h1> STUPID ASH's TODO LIST ! </h1> 
      </header>
      <Form 
          setInputText={setInputText} 
          inputText={inputText}
          todos={todos} 
          setTodos={setTodos}
          setStatus={setStatus}
      />
      <TodoList
           todos={todos} 
           setTodos={setTodos}
           filtredTodos={filtredTodos} 
       />
    </div>
  );
}

export default App;
