import React, { useState } from "react";
import "../App.css";
import Text from "../components/text";
import NameInput from "../components/nameInput";
import SubmitButton from "../components/submitButton";
import Character from "../Character";
import DisplayCharacter from "../components/DisplayCharacter";
import background from "../images/LCARS-Excalibur.jpg";

const apiGet = (
  name: string,
  setCharacters: (character: Character[]) => void
) => {
  const requestOptions = {
    method: "POST",
    // headers: { 'Content-Type': 'application/json' },
    // body: JSON.stringify({ title: 'React POST Request Example' })
  };

  fetch(
    "https://stapi.co/api/v1/rest/character/search?name=" + name,
    requestOptions
  )
    .then((response) => response.json())
    .then((json) => {
      setCharacters(json.characters);
    });
};

function CharacterSearchPage() {
  const [name, setName] = useState("");
  const [character, setCharacters] = useState<Character[]>([]);

  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      {character.map((item) => (
        <DisplayCharacter character={item}></DisplayCharacter>
      ))}

      <Text></Text>
      <NameInput
        onChange={(value) => {
          setName(value);
        }}
      ></NameInput>
      <SubmitButton onSubmit={() => apiGet(name, setCharacters)}></SubmitButton>
    </div>
  );
}

export default CharacterSearchPage;
