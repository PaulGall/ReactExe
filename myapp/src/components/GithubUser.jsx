import { useGithubUser } from "./useGithubUser";

function GithubUser(props) {
  const { data, onFetchData } = useGithubUser(props.username);

  return (
    <div>
      <button onClick={onFetchData}>Fetch</button>
      {data && (
        <div>
          <h3>{data.name}</h3>
          <p>{data.login}</p>
        </div>
      )}
    </div>
  );
}

export default GithubUser;
