import { useContext } from "react";
import { AuthContext } from "../context/UserContext";

export const User = () => {
  const userContext = useContext(AuthContext);
  const handleLogin = () => {
    userContext.setUser({ name: "Nguyen Van A", email: "nguyenvana@gmail.com" });
  };
  const handleLogout = () => {
    userContext.setUser(null);
  };
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <div>User name is {userContext.user?.name}</div>
      <div>User email is {userContext.user?.email}</div>
    </div>
  );
};
