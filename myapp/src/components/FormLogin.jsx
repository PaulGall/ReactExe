import { useState } from "react";

function FormLogin() {
  const [data, setData] = useState({
    username: "",
    password: "",
    checkbox: false,
  });

  function handleData(event) {
    const { name, type, checked, value } = event.target;
    setData((data) => {
      return {
        ...data,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }
  console.log(data);

  return (
    <>
      <input
        onChange={handleData}
        type="text"
        name="username"
        value={data.username}
      />
      <input
        onChange={handleData}
        type="text"
        name="password"
        value={data.password}
      />
      <input
        onChange={handleData}
        type="checkbox"
        name="checkbox"
        checked={data.checkbox}
      />
    </>
  );
}

export default FormLogin;
