import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const AuthContext = createContext();

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data))
      .catch((err) => console.error(err));
  }, []);

  const addUser = (user) => {
    setUsers([...users, { id: Date.now(), ...user }]);
  };

  // 🔥 Delete user by id
  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <AuthContext.Provider
      value={{ users, search, setSearch, addUser, deleteUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};
