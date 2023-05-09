import Age from "./Age"

function Welcome(props){
    return <div>
                <p>Welcome {props.name}!</p>
                {props.age >= 18 && props.age <= 65
                ? <p>Your age is {props.age}</p>
                : <p>Insert a valid age, between 18 and 65</p>
                }
                <Age/>
            </div>
}

export default Welcome