import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  // Determine background color
  const backgroundColor = count > 5 ? 'purple' : 'red';

  return (
    <div style={{ backgroundColor, padding: '20px', borderRadius: '8px', width: '500px', textAlign: 'center' }}>
      <h2>Counter: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button> &nbsp;
      <button onClick={() => setCount(count - 1)}>decrement</button> &nbsp;
      <button onClick={() => setCount(0)}>reset</button>
          </div>
  );
}

export default Counter;