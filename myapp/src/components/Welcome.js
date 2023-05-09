import Age from "./Age";

function Welcome(props){
    return <div>
            <p>Welcome {props.name}!</p>
            {props.age >= 18
            ? <p>Your age is {props.age}</p>
            : <p>Your are younger than 18 years old</p>}
            <Age/>
        </div>
}

export default Welcome