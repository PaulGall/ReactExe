import React from "react";

import LanguageContext from "./LanguageContext";
import TodoList from "./TodoList";

const arrNames = ["Alfio", "Andrea", "Manfredi"];

class DisplayLanguage extends React.Component {
  state = {
    language: "italiano",
  };

  handleLanguageChange = (event) => {
    this.setState({
      language: event.target.value,
    });
  };

  render() {
    return (
      <>
        <h3>My Display Language</h3>
        <select
          value={this.state.language}
          onChange={this.handleLanguageChange}>
          <option value="english">ENGLISH</option>
          <option value="italiano">ITALIANO</option>
        </select>
        <LanguageContext.Provider value={this.state.language}>
          <TodoList name={arrNames} />
        </LanguageContext.Provider>
      </>
    );
  }
}

export default DisplayLanguage;
