import {useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import style from "./App.module.css";
import TodoList from './components/TodoList.jsx'
import AddTodoForm from './components/AddTodoForm.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom";


 


function App() {
  const [newTodo , setNewTodo ] = useState("") ;
  // const [todoList, setTodoList] = useState(() => {
  //   const savedTodos = localStorage.getItem("savedTodoList");
  //   return savedTodos ? JSON.parse(savedTodos) : [];
  // });
  const [todoList, setTodoList] = useState([]);
  const [isLoading, setIsLoading] = useState(true); 
  const [isAscending, setIsAscending] = useState(true); // State to track sort order


const fetchData = async () =>{
  const options={
    method: 'GET',
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_AIRTABLE_API_TOKEN}`,
    },
  };
  const url = `https://api.airtable.com/v0/${import.meta.env.VITE_AIRTABLE_BASE_ID}/${import.meta.env.VITE_TABLE_NAME}?view=Grid%20view&sort[0][field]=Title&sort[0][direction]=asc`;
 
  try {
    const response = await fetch(url, options); 

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    const data = await response.json();

    //data.records.sort((objectA, objectB) => {
      //const titleA = objectA.fields.Title.toLowerCase();
      //const titleB = objectB.fields.Title.toLowerCase();

     // if (titleA < titleB) return 1;  // A comes after B
     // if (titleA > titleB) return -1; // A comes before B
     // return 0; // A and B are the same
   // });

    const todos = data.records.map((record) => ({
      title: record.fields.Title,
      id: record.id,
      createdTime: record.createdTime, 
    }));


    setTodoList(todos);
    setIsLoading(false);
  
  } catch (error) {
    console.error('Error occurred while fetching data:', error);
  }
};

 // Sort todos function
 const sortTodos = (todos, ascending) => {
  return [...todos].sort((a, b) => {
    const timeA = new Date(a.createdTime);
    const timeB = new Date(b.createdTime);
    return ascending ? timeA - timeB : timeB - timeA;
  });
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
    const newTask = {
      title: newTodo.title,
      id: newTodo.id,
      createdTime: new Date().toISOString(),
    };

    // Update list and keep it sorted
    setTodoList((prevTodos) => sortTodos([...prevTodos, newTask], isAscending));
  };

  const removeTodo= (id)=>{
    const updatedTodoList = todoList.filter((todo) => todo.id !== id);
    setTodoList(updatedTodoList);
  };
   
// Toggle sorting order
const toggleSortOrder = () => {
  setIsAscending((prev) => !prev);
};
  

 // Apply sorting when the sort order changes
 useEffect(() => {
  if (!isLoading) {
    setTodoList((prevTodos) => sortTodos(prevTodos, isAscending));
  }
}, [isAscending, isLoading]);


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

            <button onClick={toggleSortOrder} className={style.sortButton}>
                Sort by Date: {isAscending ? "Oldest First" : "Newest First"}
              </button>

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
