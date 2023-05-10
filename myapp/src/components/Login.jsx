
const Login = (props) => {

    const onLogin = (event) => {
        event.preventDefault();
    let values = {
        name: props.text,
        password: props.pass,
    }
    console.log(values)
    }
        return(
            <>
                <button disabled={!props.text || !props.pass} onClick={onLogin}>Login</button>
            </>
        )
}

export default Login