import { useCounter } from "./useCounter";

function Counter() {
  const { counter, increment, decrement, reset } = useCounter();

  return (
    <>
      <h2>Count: {counter}</h2>
      <button onClick={increment}>Incrementa</button>
      <button onClick={decrement}>Decrementa</button>
      <button onClick={reset}>Resetta</button>
    </>
  );
}

export default Counter;
