import {useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import style from "./App.module.css";
import TodoList from './TodoList.jsx'
import AddTodoForm from './AddTodoForm.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom";


 


function App() {
  const [newTodo , setNewTodo ] = useState("") ;
  // const [todoList, setTodoList] = useState(() => {
  //   const savedTodos = localStorage.getItem("savedTodoList");
  //   return savedTodos ? JSON.parse(savedTodos) : [];
  // });
  const [todoList, setTodoList] = useState([]);
  const [isLoading, setIsLoading] = useState(true); 

const fetchData = async () =>{
  const options={
    method: 'GET',
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_AIRTABLE_API_TOKEN}`,
    },
  };
  const url = `https://api.airtable.com/v0/${import.meta.env.VITE_AIRTABLE_BASE_ID}/${import.meta.env.VITE_TABLE_NAME}`;
 
  try {
    const response = await fetch(url, options); 

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    const data = await response.json();
    const todos = data.records.map((record) => ({
      title: record.fields.Title,
      id: record.id,
    }));

    setTodoList(todos);
    setIsLoading(false);
  
  } catch (error) {
    console.error('Error occurred while fetching data:', error);
  }
};


  useEffect(() => {

    fetchData();

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
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <>
          <div className={style.todoContainer}>
            <h1>Todo List</h1>
            
            <div className={style.addTodoForm}>
              <AddTodoForm onAddTodo={addTodo} />
            </div>
  
            {isLoading ? (
                <div className={style.loadingContainer}>
                  <div className={style.spinner}></div>
                  <p>Loading your Todo List...</p>
                </div>
              ) : (
                <TodoList todoList={todoList} onremoveTodo={removeTodo} />
              )}
          </div>
        </>
        } />
        <Route path="/new" element={
          <div>
            <h1>New Todo List</h1>
          </div>
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App
