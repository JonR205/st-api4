import React, { useState } from "react";
import "../App.css";
import Text from "../components/text";
import NameInput from "../components/nameInput";
import Header from "../components/header";
import Footer from "../components/footer";
// import background from "../images/LCARS-Excalibur.jpg";
import SubmitButton from "../components/submitButton";
import Performer from "../Performer";
import DisplayPerformer from "../components/DisplayPerformer";

const apiGet = (
  name: string,
  setPerformers: (performers: Performer[]) => void
) => {
  const requestOptions = {
    method: "POST",
    // headers: { 'Content-Type': 'application/json' },
    // body: JSON.stringify({ title: 'React POST Request Example' })
  };

  fetch(
    "https://stapi.co/api/v2/rest/performer/search?name=" + name,
    requestOptions
  )
    .then((response) => response.json())
    .then((json) => {
      setPerformers(json.performers);
    });
};

function PerformerSearchPage() {
  const [name, setName] = useState("");
  const [performers, setPerformers] = useState<Performer[]>([]);
  console.log(performers);

  return (
    <div>
      <DisplayPerformer performer={performers[0]}></DisplayPerformer>
      <Text></Text>
      <NameInput
        onChange={(value) => {
          setName(value);
        }}
      ></NameInput>
      <SubmitButton onSubmit={() => apiGet(name, setPerformers)}></SubmitButton>
    </div>
  );
}

export default PerformerSearchPage;
