import { useState, useRef } from "react";

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

  return (
    <>
      <h3>Todo List</h3>
      <input
        onChange={(event) => setName(event.target.value)}
        ref={clearInput}
      />
      <button type="button" onClick={setNameHandler}>
        Add Item
      </button>
      <button type="button" onClick={setResetHandler}>
        Reset List
      </button>
      <ul ref={clearList} onChange={(event) => setReset(event.target.value)}>
        {item.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </>
  );
};

export default TodoList;
