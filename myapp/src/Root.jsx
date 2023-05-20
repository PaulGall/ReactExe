import { Route, Routes } from "react-router-dom";
import GithubUserList from "./components/GithubUserList";

function App() {
  return (
    <div>
      <Routes>
        <Route path="user">
          <Route path="list" element={<GithubUserList />}>
            <Route index element={<p>Add a user and select it</p>} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
