import React, {useState} from 'react';

 const ClickTracker = () => {
    const [ClickTracker, setClickTracker] = useState();

        const click = (event) => {
            setClickTracker(event.tracker.textContent);
        }

        return <>
            <button onClick={click}>First Button</button>
            <button onClick={click}>Second Button</button>
            <button onClick={click}>Third Button</button>
            <h1>Last Button Clicked: {ClickTracker}</h1>
        </>
}

export default ClickTracker;