import React, { useState } from "react";
import "./App.css";
import Text from "./components/text";
import NameInput from "./components/nameInput";
import Header from "./components/header";
import Footer from "./components/footer";
import Sides from "./components/Sides";
import background from "./images/LCARS-Excalibur.jpg";
import SubmitButton from "./components/submitButton";
import Performer from "./Performer";
import DisplayPerformer from "./components/DisplayPerformer";
import PerformerSearchPage from "./components/PerformerSearchPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CharacterSearchPage from "./components/CharacterSearchPage";

// const apiGet = (name: string, setPerformers: (performers: Performer[]) => void) => {

//   const requestOptions = {
//     method: 'POST',
//     // headers: { 'Content-Type': 'application/json' },
//     // body: JSON.stringify({ title: 'React POST Request Example' })
//   };

//   fetch(
//     "https://stapi.co/api/v2/rest/performer/search?name=" + name, requestOptions
//   )
//     .then((response) => response.json())
//     .then((json) => {
//       setPerformers(json.performers);
//     });
// };

function App() {
  // const [name, setName] = useState("")
  // const [performers, setPerformers] = useState<Performer[]>([])
  // console.log(performers);

  return (
    <div>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PerformerSearchPage />} />
          <Route path="/home" element={<PerformerSearchPage />} />
          <Route path="/Performers" element={<PerformerSearchPage />} />
          <Route path="/characters" element={<CharacterSearchPage />} />
        </Routes>
      </BrowserRouter>

      {/* <DisplayPerformer performer={performers[0]}></DisplayPerformer>
      <Text></Text>
      <NameInput onChange={(value) => {
        setName(value);
      }}></NameInput>
      <SubmitButton onSubmit={() => apiGet(name, setPerformers)}></SubmitButton> */}
      <Footer />
    </div>
  );
}

export default App;
