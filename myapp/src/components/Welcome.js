import Age from "./Age"

function Welcome(props){
    return <>
                <p>Welcome {props.name}!</p> 
                {props.name === "John" && props.age >= 18 && props.age <= 65
                ? <p>Your age is {props.age}</p> 
                : <p>Your name is not John or you're not between 18 and 65</p>}
                <Age/>
                </>
}

export default Welcome