import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const todoList=[
  {
    id: 1,
    title: "Complete assignment"
  },
  {
    id: 2,
    title: "Read React documentation"
  },
  {
    id: 3,
    title: "Practice coding exercises"
  }
];

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Todo List</h1>
      <ul>
        {
        todoList.map(item => <li key={item.id}> { item.title}</li>)
        }
        </ul>
    </>
  )
}

export default App
