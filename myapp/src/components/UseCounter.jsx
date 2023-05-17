import { useState } from "react";

export function useCounter(){
    const [counter, setCount] = useState(0);

    const handleIncrease = () => {
        setCount(count => count + 1)
    }

    const handleDecrease = () => {
        if (counter > 0) {
            setCount(count => count - 1);
        }
      };

    const handleReset = () => {
        setCount(count => count = 0)
    }

    return {
        counter: counter,
        increment: handleIncrease,
        decrement: handleDecrease,
        reset: handleReset
    }

}