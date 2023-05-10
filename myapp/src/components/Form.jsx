import { useState } from "react";
import Login from "./Login"

const Form = () => {

  const [name, setName] = useState("");
  const [pass, setPass] = useState("");

  const setNameHandler = (event) => {
    setName({ name: event.target.value });
  };

  const setPassHandler = (event) => {
    setPass({ pass: event.target.value });
  };

  return (
    <form>
      <input type="text" onChange={setNameHandler} />
      <input type="password" onChange={setPassHandler} />
      <Login text={name} pass={pass} />
    </form>
  );
}

export default Form