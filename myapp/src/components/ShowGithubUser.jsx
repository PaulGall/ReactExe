import { useState } from "react";
import GithubUser from "./GithubUser";
import { Outlet } from "react-router-dom";

function GithubUserList() {
  const [name, setName] = useState([]);
  const [item, setItem] = useState([]);

  const handleSetList = () => {
    setItem([...item, name]);
  };

  return (
    <>
      <input type="text" onChange={(event) => setName(event.target.value)} />
      <button onClick={handleSetList}>Add</button>
      <ul>
        {item.map((index) => {
          return (
            <li key={index}>
              <GithubUser username={name} />
            </li>
          );
        })}
      </ul>
      <div>
        <Outlet />
      </div>
    </>
  );
}

export default GithubUserList;
