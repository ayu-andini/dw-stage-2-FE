<!-- Controlled Form -->
// Demo 1: Uncontrolled (access via ref)
function Uncontrolled() {
  const inputRef = useRef<HTMLInputElement>(null);
  
  const handleSubmit = () => {
    console.log(inputRef.current?.value); // Access DOM directly
  };
  
  return <input ref={inputRef} />;
}

// Demo 2: Controlled (React state)
function Controlled() {
  const [value, setValue] = useState('');
  
  return (
    <div>
      <input 
        value={value} 
        onChange={(e) => setValue(e.target.value)} 
      />
      <p>Live preview: {value}</p>  {/* Can use state immediately! */}
    </div>
  );
}


<!-- useEffect Lifecycle -->
function LifecycleDemo() {
  const [count, setCount] = useState(0);
  
  // Mount
  useEffect(() => {
    console.log('🟢 Component MOUNTED');
  }, []);
  
  // Update
  useEffect(() => {
    console.log('🔵 Count UPDATED:', count);
  }, [count]);
  
  // Unmount
  useEffect(() => {
    return () => {
      console.log('🔴 Component will UNMOUNT');
    };
  }, []);
  
  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
}

<!-- Debouncing Effect -->
// Without debouncing - log every keystroke
function WithoutDebounce() {
  const [input, setInput] = useState('');
  
  useEffect(() => {
    console.log('API call for:', input);
  }, [input]); // Runs on EVERY keystroke!
  
  return <input value={input} onChange={(e) => setInput(e.target.value)} />;
}

// With debouncing - log after 500ms pause
function WithDebounce() {
  const [input, setInput] = useState('');
  const debouncedInput = useDebounce(input, 500);
  
  useEffect(() => {
    console.log('API call for:', debouncedInput);
  }, [debouncedInput]); // Only runs after 500ms pause!
  
  return <input value={input} onChange={(e) => setInput(e.target.value)} />;
}