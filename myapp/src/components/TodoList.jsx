import { useState } from "react";

const TodoList = (props) => {
  const [name, setName] = useState("");
  const [item, setItem] = useState(props.name);

  const setNameHandler = () => {
    setItem([...item, name]);
    setName("");
  };

  return (
    <>
      <h3>Todo List</h3>
      <input onChange={(event) => setName(event.target.value)} />
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
