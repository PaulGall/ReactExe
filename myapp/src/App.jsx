import { Link, Route, Routes } from "react-router-dom";
import ShowGithubUser from "./components/ShowGithubUser";

function App() {
  return (
    <div>
      <Link to="/user/PaulGall">Go to User</Link>
      <Routes>
        <Route path="user/:username" element={<ShowGithubUser />} />
      </Routes>
    </div>
  );
}

export default App;
