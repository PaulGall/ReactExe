import { useEffect, useState } from "react";

function GithubUser(props) {

    const [data, setData] = useState(null);
    
    useEffect(() => {
        fetch(`https://api.github.com/users/${props.username}`)
        .then(response => response.json())
        .then(json => {
            console.log(json)
            setData(json)
        });
    }, [props.username])

    return <>
            <div>
                {data && <a href={data.html_url}><h1>{data.login}</h1></a>}
            </div>
        </>
}

export default GithubUser;