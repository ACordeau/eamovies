import React, { useContext, useEffect, useState } from "react";
import userList from "./data/users.json";
// import axios from "axios";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  // State Variables

  const [currentUser, setCurrentUser] = useState("");
  const [login, setLogin] = useState(false);
  const [users, setUsers] = useState([]);

  // Functions

  const getUsers = () => {
    setUsers(userList);
  };

  const checkUser = (currUser, password) => {
    let activeUser = users.find((obj) => obj.username === currUser);
    let verify = false;
    if (activeUser) {
      verify = checkPassword(activeUser, password);
    }

    if (verify) {
      return true;
    }

    return false;
  };

  const checkPassword = (activeUser, password) => {
    if (activeUser.password === password) {
      setCurrentUser(activeUser.moniker);
      return true;
    }

    return false;
  };

  // useEffects

  useEffect(() => {
    getUsers();
  }, [users]);

  return (
    <AppContext.Provider
      value={{ login, setLogin, currentUser, users, checkUser }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
