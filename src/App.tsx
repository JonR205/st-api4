import React from "react";
import "./App.css";
import Text from "./components/text";
import NameInput from "./components/nameInput";
import Button from "./components/submitButton";
import Header from "./components/header";
import Footer from "./components/footer";

function App() {
  return (
    <div id="container" className="App">
      <Header></Header>
      <Text></Text>
      <NameInput></NameInput>
      <Button></Button>
      <Footer></Footer>
    </div>
  );
}

export default App;
