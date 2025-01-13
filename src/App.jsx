import {useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TodoList from './TodoList.jsx'
import AddTodoForm from './AddTodoForm.jsx'

 




function App() {
  const [newTodo , setNewTodo ] = useState("") ;
  // const [todoList, setTodoList] = useState(() => {
  //   const savedTodos = localStorage.getItem("savedTodoList");
  //   return savedTodos ? JSON.parse(savedTodos) : [];
  // });
  const [todoList, setTodoList] = useState([]);
  const [isLoading, setIsLoading] = useState(true); 

  useEffect(() => {
    const savedTodos = localStorage.getItem("savedTodoList");
    const fetchTodoList = new Promise((resolve,reject)=>{
      setTimeout(() => {
        resolve({
          data: {
            todoList:savedTodos ? JSON.parse(savedTodos) : [], // Initial todoList value
          },
        });
      }, 2000);
    });

    fetchTodoList
    .then((result) => {
      // Update the state with the fetched todo list
      
      setTodoList(result.data.todoList);
      setIsLoading(false);
    })
    .catch((error) => {
      console.error('Error fetching the todo list:', error);
      setIsLoading(false);
    });
  }, []);

  useEffect(() => {
    
    if (!isLoading) {  
      localStorage.setItem("savedTodoList", JSON.stringify(todoList));
    }
    
  }, [todoList, isLoading]);

   // Function to add a new todo
   const addTodo = (newTodo) => {

    setTodoList([...todoList, { title: newTodo.title,id: newTodo.id }]);
  };

  const removeTodo= (id)=>{
   
    const updatedTodoList = todoList.filter((todo) => todo.id !== id);
    setTodoList(updatedTodoList);
  };
   

  return (
  
      <>
        <div className="todo-container">
          <h1>Todo List</h1>
          
          <div className="add-todo-form">
            <AddTodoForm onAddTodo={addTodo} />
          </div>

          {isLoading ? (
              <div className="loading-container">
                <div className="spinner"></div>
                <p>Loading your Todo List...</p>
              </div>
            ) : (
              <TodoList todoList={todoList} onremoveTodo={removeTodo} />
            )}


        
        </div>
      </>
  )
}

export default App
