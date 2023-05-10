import React, {useState} from 'react';

 const ClickCounter = () => {
    const [count, setCount] = useState(0);

        const click = () => {
            setCount(count + 1);
        }

        return <>
                <h1>Count: {count}</h1>
                <button onClick={click}>Update Counter</button>
                </>
}

export default ClickCounter;