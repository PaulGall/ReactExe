const UncontrolledLogin = () => {

  const handleChangeForm = (event) => {
    event.preventDefault();

    const username = event.target.username.value;
    const password = event.target.password.value;
    const checkbox = event.target.checkbox.checked;

    console.log({
      username, password, checkbox
    })
  }

  return <>
          <h3>Uncontrolled Form</h3>
          <form onSubmit={handleChangeForm}>
            <input type="text" name="username" autoFocus/>
            <input type="password" name = "password" />
            <input type="checkbox" name = "checkbox"/>
            <button type="submit">Login</button>
          </form>
            
        </>
}

export default UncontrolledLogin