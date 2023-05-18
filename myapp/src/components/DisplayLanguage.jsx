import { useState } from "react";

function DisplayLanguage() {
  const [language, setLanguage] = useState("it");

  function handleLanguageChange(event) {
    setLanguage(event.target.value);
  }

  const Language = {
    en: {
      HELLO: "Hello! What's up?",
      CURRENT: "Selected language: ",
    },

    it: {
      HELLO: "Ciao! Come va?",
      CURRENT: "Lingua selezionata: ",
    },
  };

  return (
    <>
      <b>{Language[language]["CURRENT"]}</b>
      <select value={language} onChange={handleLanguageChange}>
        <option value="en">ENGLISH</option>
        <option value="it">ITALIANO</option>
      </select>
      <h3>{Language[language]["HELLO"]}</h3>
    </>
  );
}

export default DisplayLanguage;
