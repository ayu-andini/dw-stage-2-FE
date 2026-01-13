import './App.css'
import { TodoItem } from './components/TodoItem';
import { useState } from 'react'
// import { Hello, HelloProps  } from './components/Card';


interface Todo {
  text: string;
  completed: boolean;
}

function App() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState<Todo[]>([]);

  function handleAdd() {
    if (task.trim() === "") return;
    const newTodo: Todo = { text: task, completed: false };
    setTodos([...todos, newTodo]);
    setTask("");
  }

  function handleToggleComplete(index: number) {
    const newTodos = todos.map((todo, i) =>
      i === index ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(newTodos);
  }

let countVar = 0;
const [count, setCount] = useState(0);



  return (
    <>
    {/* <Hello /> */}
    {/* <HelloProps name="Ayu"/> */}
    {/* <HelloProps name="Andini"/> */}

    <button onClick={() => { 
      countVar++; 
      console.log(countVar);  // Updates in console only!
    }}>
      Count: {countVar}
    </button>

    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>


    <div style={{ padding: "2rem" }}>
      <h2>To-Do List</h2>

      <input value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Write a task" />
      <button onClick={handleAdd}>Add</button>

      <ul>
        {todos.map((todo, index) => (
          <TodoItem
            key={index}
            text={todo.text}
            completed={todo.completed}
            onToggleComplete={() => handleToggleComplete(index)}
          />
        ))}
      </ul>
    </div>
  </>
  )
}

export default App
