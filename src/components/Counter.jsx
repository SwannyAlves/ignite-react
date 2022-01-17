import { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <section>
      <h2>Counter</h2>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </section>
  );
}