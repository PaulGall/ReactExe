import { useGithubUser } from "./useGithubUser";

function GithubUser(props) {
  const { data, loading, error, onFetchUser } = useGithubUser(props.username);

  function userDataHandle() {
    onFetchUser(props.username);
  }

  return (
    <>
      <button onClick={userDataHandle}>Load</button>
      {data && (
        <div>
          {loading && <h1>Loading...</h1>}
          {error && <h1>Error</h1>}
          <h1>{data.name}</h1>
          <p>{data.login}</p>
        </div>
      )}
    </>
  );
}

export default GithubUser;
