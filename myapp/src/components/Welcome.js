function Welcome(props){
    return <p>Welcome {props.name}!</p>
}

Welcome.defaultProps = {
    name : "Giovanni"
};

export default Welcome