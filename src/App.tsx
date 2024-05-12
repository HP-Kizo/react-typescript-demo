import React, { useEffect, useRef } from "react";
import "./App.css";
import { Greet } from "./components/Greet";
import { Button } from "./components/Button";
import { Input } from "./components/Input";
import { Box } from "./context/Box";
import { ThemeContextProdvider } from "./context/ThemeContext";
import { Counter } from "./components/Counter";
import { User } from "./components/User";
import { AuthContextProvider } from "./context/UserContext";
import CounterComponent from "./components/CounterComponent";
import UserComponent from "./components/UserComponent";
import { get, getDatabase, ref, set } from "firebase/database";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "./store/store";
import BankComponent from "./components/BankComponent";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    // Dữ liệu sẽ được tự động đọc từ Firebase khi ứng dụng khởi chạy
  }, []);
  return (
    <div className="App">
      {/* <Greet name={name} isLoggedIn={true} messageCount={20}></Greet>
      <Button
        handleClick={(event, id) => {
          console.log("Clicked", event, id);
        }}
      ></Button>
      <Input value="" handleChange={(event) => console.log(event)} /> */}
      {/* <ThemeContextProdvider>
        <Box></Box>
      </ThemeContextProdvider> */}
      {/* <Counter></Counter> */}
      {/* <AuthContextProvider>
        <User></User>
      </AuthContextProvider> */}
      {/* <CounterComponent></CounterComponent> */}
      {/* <UserComponent></UserComponent> */}
      <BankComponent></BankComponent>
    </div>
  );
}

export default App;
