import { useEffect, useState } from "react";

export function useGithubUser(username) {
    const [data, setData] = useState(null);
    
    useEffect(() => {
        fetch(`https://api.github.com/users/${username}`)
        .then(response => response.json())
        .then(json => {
            console.log(json)
            setData(json)
        });
    }, [username])

    return {
        data
    };
}