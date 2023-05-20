import { Link, Route, Routes } from "react-router-dom";
import GithubUserList from "./components/GithubUserList";
import ShowGithubUser from "./components/ShowGithubUser";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/users" element={<GithubUserList />}>
          <Route path=":username" element={<ShowGithubUser />} />
        </Route>
      </Routes>
      <Link to="/users">Go to User List</Link>
      <br />
      <Link to="/users/Rushizo">Go to User Danilo Carbone</Link>
      <br />
      <Link to="/users/yangus98">Go to User Giuseppe Bianconi</Link>
      <br />
      <Link to="/users/RobertoFanara">Go to User Roberto Fanara</Link>
    </div>
  );
}

export default App;
