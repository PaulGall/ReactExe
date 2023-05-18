import DisplayLanguage from "./components/DisplayLanguage";
import LanguageContext from "./components/LanguageContext";
import "./App.css";

function App() {
  return (
    <div>
      <LanguageContext.Provider>
        <DisplayLanguage />
      </LanguageContext.Provider>
    </div>
  );
}

export default App;
