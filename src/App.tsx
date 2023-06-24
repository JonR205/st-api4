import React from "react";
import "./App.css";
import Text from "./components/text";
import NameInput from "./components/nameInput";
import Button from "./components/submitButton";
import Header from "./components/header";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Text></Text>
      <NameInput></NameInput>
      <Button></Button>
    </div>
  );
}

export default App;
