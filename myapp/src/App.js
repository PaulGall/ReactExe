import Counter from "./components/Counter";
import { Route, Routes, Link } from "react-router-dom";

function App() {
  return (
    <div>
      <Link to="/counter">Counter</Link>
      <Routes>
        <Route path="/counter" element={<Counter />} />
      </Routes>
    </div>
  );
}

export default App;
