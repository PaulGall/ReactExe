import { useState } from "react";
import { useRef } from "react";
import Login from "./Login"

const Form = () => {

  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [pass, setPass] = useState("");

  const setNameHandler = (event) => {
    setName({ name: event.target.value });
  };

  const setLastNameHandler = (event) => {
    setLastName({lastName: event.target.value})
  }

  const setPassHandler = (event) => {
    setPass({ pass: event.target.value });
  };

  const emptyName = useRef('');
  const emptyLastName = useRef('');
  const emptyPass = useRef('');

  return (
    <form>
      <input type="text" onChange={setNameHandler}  ref = {emptyName}/>
      <br />
      <input type="text" onChange={setLastNameHandler} ref = {emptyLastName}/>
      <br />
      <input type="password" onChange={setPassHandler} ref = {emptyPass}/>
      <br />
      <Login name={name} lastName={lastName} pass={pass} emptyName={emptyName} emptyLastName = {emptyLastName} emptyPass = {emptyPass}/>
    </form>
  );
}

export default Form