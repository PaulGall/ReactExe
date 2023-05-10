import Welcome from "./Welcome";
import { useState } from "react";

const InteractiveWelcome = () => {

    const [name, setName] = useState('');
    
    const nameInput = (event) => {
        setName(event.target.value)
    }

    return <>
            <input type="text" onChange={nameInput}/>
            <Welcome name = {name}/>
            </>
}

export default InteractiveWelcome;