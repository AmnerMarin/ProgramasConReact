import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const sumar = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={sumar}>Sumar</button>
    </div>
  );
};

export default Counter;
