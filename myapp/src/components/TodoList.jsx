import { useState, useRef } from "react";
import LanguageContext from "./LanguageContext";

const Language = {
  english: { CURRENT_LANGUAGE: "English" },
  italiano: { CURRENT_LANGUAGE: "Italiano" },
};

const String = {
  english: { CURRENT_LIST: "Todo List" },
  italiano: { CURRENT_LIST: "Lista di cose da fare" },
};

const StringButton = {
  english: { CURRENT_BUTTON: "Add item" },
  italiano: { CURRENT_BUTTON: "Aggiungi un elemento" },
};

const RemoveList = {
  english: { CURRENT_BUTTON: "Delete item" },
  italiano: { CURRENT_BUTTON: "Reimposta la Lista" },
};

const TodoList = (props) => {
  
  const [name, setName] = useState("");
  const [item, setItem] = useState(props.name);
  const [reset, setReset] = useState("");
  let clearInput = useRef("");
  let clearList = useRef("");
  
  const setNameHandler = () => {
    setItem([...item, name]);
    clearInput.current.value = null;
  };

  const setResetHandler = () => {
    setItem([...reset]);
    clearList.current = [];
  };
  const setRemoveItemHandler = (id) => {
    const updateItems = [...item];
    updateItems.splice(id, 1);
    setItem(updateItems);
  };

  return (
    <>
      <LanguageContext.Consumer>
        {(language) => {
          return (
            <>
              <h1>{Language[language].CURRENT_LANGUAGE}</h1>
              <h3>{String[language].CURRENT_LIST}</h3>
              <input
                onChange={(event) => setName(event.target.value)}
                ref={clearInput}
              />

              <button type="button" onClick={setNameHandler}>
                {StringButton[language].CURRENT_BUTTON}
              </button>

              <button type="button" onClick={setResetHandler}>
                {RemoveList[language].CURRENT_BUTTON}
              </button>

              <ul
                ref={clearList}
                onChange={(event) => setReset(event.target.value)}>
                {item.map((item, id) => (
                  <>
                    <li key={id} index={id}>
                      {item}
                    </li>
                    <button
                      onClick={() => {
                        setRemoveItemHandler(id);
                      }}>
                      Delete item
                    </button>
                  </>
                ))}
              </ul>
            </>
          );
        }}
      </LanguageContext.Consumer>
    </>
  );
};

export default TodoList;
