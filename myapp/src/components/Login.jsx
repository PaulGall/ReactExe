const Login = (props) => {

    const onLogin = (event) => {
        event.preventDefault();
    let values = {
        name: props.name,
        lastName: props.lastName,
        password: props.pass,
    }
    console.log(values)
    }

    const resetContent = (event) => {
        event.preventDefault();
        props.emptyName.current.value = '';
        props.emptyLastName.current.value = '';
        props.emptyPass.current.value = '';
    }

    
        return(
            <>
                <button disabled={!props.name || !props.pass ||!props.lastName} onClick={onLogin}>Login</button>
                <button onClick={resetContent}>Reset Content</button>
            </>
        )
}

export default Login