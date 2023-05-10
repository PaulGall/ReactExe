import { useState, useRef } from "react";

const TodoList = (props) => {
  const [name, setName] = useState("");
  const [item, setItem] = useState(props.name);
  let clearInput = useRef("");

  const setNameHandler = () => {
    setItem([...item, name]);
    clearInput.current.value = null;
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
      <ul>
        {item.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </>
  );
};

export default TodoList;
