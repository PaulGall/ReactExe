import { useState, useEffect } from "react";

function Counter() {
  const [counter, setCount] = useState(0);

  useEffect(() => {
    console.log(`il counter è montato`);
    return () => {
      console.log("il componente è smontato");
    };
  }, []);

  useEffect(() => {
    console.log(`il counter è ${counter}`);
    return () => {
      console.log(`il counter era ${counter}`);
    };
  }, [counter]);

  const increase = () => {
    setCount((count) => count + 1);
  };

  const decrease = () => {
    if (counter > 0) {
      setCount((count) => count - 1);
    }
  };

  return (
    <>
      <h2>Count: {counter}</h2>
      <button onClick={increase}>Incrementa</button>
      <button onClick={decrease}>Decrementa</button>
    </>
  );
}

export default Counter;
