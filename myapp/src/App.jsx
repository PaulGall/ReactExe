import { Link, Route, Routes } from "react-router-dom";
import ShowGithubUser from "./components/ShowGithubUser";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<ShowGithubUser />} />
        <Route path="user/:username" element={<ShowGithubUser />} />
        <Route path="*" element={<p>Not found</p>} />
      </Routes>
      <Link to="/user/PaulGall">Go to User</Link>
    </div>
  );
}

export default App;
