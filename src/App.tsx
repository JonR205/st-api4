import React from "react";
import "./App.css";
import Text from "./components/text";
import NameInput from "./components/nameInput";
import Button from "./components/submitButton";

function App() {
  return (
    <div className="App">
      <Text></Text>
      <NameInput></NameInput>
      <Button></Button>
    </div>
  );
}

export default App;
