import Age from "./Age"

function Welcome(props){
    return <div>
                <p>Welcome {props.name}!</p>
                <Age age = {17}/>
            </div>
}

export default Welcome