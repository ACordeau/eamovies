import { useState } from "react";
import { useGlobalContext } from "../Context";

const Login = () => {
  const users = useGlobalContext();
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const { setCurrentUser, setLogin, checkUser } = useGlobalContext();

  const handleChangeUser = (e) => {
    setUser(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (checkLogin(user, password) === true) {
      setLogin(true);
    }
  };

  const checkLogin = (user, password) => {
    let login = checkUser(user, password);
    if (login) {
      return true;
    }

    return false;
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <input
        className="form-input"
        type="text"
        placeholder="Username"
        onChange={handleChangeUser}
        value={user}
      ></input>

      <input
        className="form-input"
        type="password"
        placeholder="Password"
        onChange={handleChangePassword}
        value={password}
      ></input>
      <button className="btn" type="submit">
        Login
      </button>
    </form>
  );
};

export default Login;
