import { useState } from "react";

export function useForm(){

    const [userName, setUserName] = useState('');
    const [pass, setPass] = useState('');

    const handleUserInput = (event) => {
        setUserName({name: event.target.value})
    }

    const handlePassInput = (event) => {
        setPass({pass: event.target.value});
    }

    const handleLogin = () => {
        let values = {
            userName: userName,
            pass: pass
        }
        console.log(values)
    }

    return {
        userHandle: handleUserInput,
        passHandle: handlePassInput,
        loginHandle: handleLogin
    }
}