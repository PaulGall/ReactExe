import { Link } from "react-router-dom";

function GithubUserList() {
  return (
    <div>
      <Link to="/users/Rushizo">Danilo Carbone</Link>
      <br />
      <Link to="/users/yangus98">Giuseppe Bianconi</Link>
      <br />
      <Link to="/users/RobertoFanara">Roberto Fanara</Link>
    </div>
  );
}

export default GithubUserList;
