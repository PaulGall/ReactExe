import { useState } from "react";
import GithubUser from "./components/GithubUser";
import "./App.css";

function App() {
  const [username, setUsername] = useState("");

  return (
    <div>
      <input
        type="text"
        value={username}
        onChange={(event) => setUsername(event.target.value)}
      />
      <GithubUser username={username} />
    </div>
  );
}

export default App;
