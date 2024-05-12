import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../store/usersSlice";
import { RootState } from "../store/store";

function UserComponent() {
  const dispatch = useDispatch();
  const [input, setInput] = useState<string>("");
  const users = useSelector((state: RootState) => state.user.list);
  const handleAddUser = () => {
    dispatch(addUser({ id: users.length + 1, name: input }));
    setInput("");
  };
  return (
    <>
      <input
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      <button onClick={handleAddUser}>Submit</button>
      {users.map((user) => {
        return (
          <p>
            Name: {user.name}, Id : {user.id}
          </p>
        );
      })}
    </>
  );
}

export default UserComponent;
