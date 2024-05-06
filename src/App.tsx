import React from "react";
import "./App.css";
import { Greet } from "./components/Greet";
import { Button } from "./components/Button";
import { Input } from "./components/Input";
import { Box } from "./context/Box";
import { ThemeContextProdvider } from "./context/ThemeContext";
import { Counter } from "./components/Counter";
import { User } from "./components/User";
import { AuthContextProvider } from "./context/UserContext";

function App() {
  const name = {
    first: "HP",
    last: "Kizo",
  };
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
      <AuthContextProvider>
        <User></User>
      </AuthContextProvider>
    </div>
  );
}

export default App;
