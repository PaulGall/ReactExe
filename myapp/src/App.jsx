import { Link, Route, Routes } from "react-router-dom";
import ShowGithubUser from "./components/ShowGithubUser";


function App() {
  return <div>
          <Routes>
            <Route path="user/:username" element={<ShowGithubUser/>}/>
          </Routes>
          <Link to='/user/Rushizo'>Go to User Danilo Carbone</Link>
          <br />
          <Link to='/user/yangus98'>Go to User Giuseppe Bianconi</Link>
          <br />
          <Link to='/user/RobertoFanara'>Go to User Roberto Fanara</Link>
        </div>
}

export default App;