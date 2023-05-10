import Counter from "./components/Counter";
import "./App.css";
import { useState } from "react";

function App() {
  const [showCounter, setShowCounter] = useState(true);

  const handleShowCounter = () => {
    setShowCounter((counter) => !counter);
  };

  return (
    <div>
      <button onClick={handleShowCounter}>Elimina/Aggiungi Componente</button>
      {showCounter && <Counter />}
    </div>
  );
}

export default App;
