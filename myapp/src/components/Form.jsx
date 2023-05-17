import { useForm } from "../useForm";

function Form() {
    const {userHandle, passHandle, loginHandle} = useForm();

    return <>
            <input type="text" onChange={userHandle} />
            <input type="password" onChange={passHandle} />
            <button type="button" onClick={loginHandle}>Login</button>
            </>
}

export default Form;