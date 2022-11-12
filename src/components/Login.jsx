import { useState } from "react";
import { useGlobalContext } from "../Context";

const Login = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const { setLogin, checkUser, currentUser } = useGlobalContext();

  const handleChangeUser = (e) => {
    setUser(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let check = checkLogin(user, password);
    if (check === true) {
      setLogin(true);
      console.log(currentUser);
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
    <div className="login-page">
      <div className="inner-form">
        <h5>
          {currentUser === ""
            ? "No users currently logged in"
            : `${currentUser} is currently logged in`}
        </h5>
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
      </div>
    </div>
  );
};

export default Login;
