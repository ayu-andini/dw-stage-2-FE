import { useRef, useState, useEffect } from "react";

export function Uncontrolled() {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = () => {
    alert(inputRef.current?.value);
  };

  return (
    <div>
      <input ref={inputRef} placeholder="Type something..." />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}


export function Controlled() {
  const [value, setValue] = useState("");

  return (
    <div>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Type something..."
      />
      <p>Live preview: {value}</p>
    </div>
  );
}

export function LifecycleDemo() {
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