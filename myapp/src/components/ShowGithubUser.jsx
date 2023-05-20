import { useParams } from "react-router-dom";

function ShowGithubUser() {
  const { username } = useParams();
  return (
    <>
      <h1>{username}</h1>
    </>
  );
}

export default ShowGithubUser;
