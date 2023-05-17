
import { useGithubUser } from "./useGithubUser";
function GithubUser(props) {
    const {data} = useGithubUser(props.username)

    return <>
            <div>
                {data && <a href={data.html_url}><h1>{data.login}</h1></a>}
            </div>
        </>
}

export default GithubUser;