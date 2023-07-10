import React, { useState } from "react";
import "../App.css";
import Text from "../components/text";
import NameInput from "../components/nameInput";
import Header from "../components/header";
import Footer from "../components/footer";
import SubmitButton from "../components/submitButton";
import Character from "../Character";
import DisplayCharacter from "../components/DisplayCharacter";

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
    <div>
      {character.map((item) => (
        <DisplayCharacter character={character?.[1]}></DisplayCharacter>
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
