import { useCallback, useState } from "react";

export function useCounter() {
  const [counter, setCount] = useState(0);

  const handleIncrease = useCallback(function handleIncrease() {
    setCount((count) => count + 1);
    console.log("increase by useCallback");
  }, []);

  const handleDecrease = useCallback(
    function handleDecrease() {
      if (counter > 0) {
        setCount((count) => count - 1);
      }
    },
    [counter]
  );

  const handleReset = useCallback(function handleReset() {
    setCount((count) => (count = 0));
  }, []);

  return {
    counter: counter,
    increment: handleIncrease,
    decrement: handleDecrease,
    reset: handleReset,
  };
}
