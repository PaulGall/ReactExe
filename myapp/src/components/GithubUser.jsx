import { useGithubUser } from "./useGithubUser";

function GithubUser(props) {
  const { data } = useGithubUser(props.username);

  console.log(data);

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
