import './App.css'
// import CardItem, { CardProfile } from './components/Card';
import { TodoItem } from './components/TodoItem';
import { useState } from 'react'

// function App() {
// }

function App() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState<string[]>([]);

  // Tambahkan ke array langsung (tanpa validasi atau trim)
  function handleAdd() {
    const newTodos = todos.concat(task);
    setTodos(newTodos);
    setTask("");
  }

  return (
    <div style={{ padding: "2rem" }}>
      <h2>To-Do List</h2>

      <input value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Write a task" />
      <button onClick={handleAdd}>Add</button>

      <ul>
        {todos.map((todo, index) => (
          <TodoItem key={index} text={todo} />
        ))}
      </ul>
    </div>
  )
}

export default App
