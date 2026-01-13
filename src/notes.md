<!-- Component Basics -->
// 1. Simple component
function Hello() {
  return <h1>Hello World</h1>;
}

// 2. With variable
function Hello() {
  const name = "John";
  return <h1>Hello {name}</h1>;
}

// 3. With props
function Hello({ name }) {
  return <h1>Hello {name}</h1>;
}

// 4. With state
function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}

<!-- State vs Variable -->
// Demo 1: Regular variable (NO re-render)
let count = 0;
<button onClick={() => { 
  count++; 
  console.log(count);  // Updates in console only!
}}>
  Count: {count}
</button>

// Demo 2: State variable (WITH re-render)
const [count, setCount] = useState(0);
<button onClick={() => setCount(count + 1)}>
  Count: {count}  {/* Updates in UI! */}
</button>

<!-- Conditional Rendering -->
// 1. Ternary - Show different icon
{isCompleted ? '✅' : '⏳'}

// 2. Short-circuit - Show/hide message
{todos.length === 0 && <p>No todos</p>}

// 3. Combined
<span style={{
  color: isCompleted ? 'green' : 'orange',
  textDecoration: isCompleted ? 'line-through' : 'none'
}}>
  {text}
</span>