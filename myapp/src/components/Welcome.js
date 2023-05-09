import Age from "./Age"

function Welcome(props){
    return <div> 
            <p>Welcome {props.name}!</p>
            {props.age
            ? <p>Your age is {props.age}</p>
            : <p>Insert an age</p>}  
            <Age/>
        </div>
}

export default Welcome