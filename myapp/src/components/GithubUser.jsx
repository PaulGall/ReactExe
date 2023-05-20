import { useGithubUser } from "./useGithubUser";

function GithubUser(props) {
  const { data } = useGithubUser(props.username);

  return (
    <div>
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
