import React from "react";
import "../App.css";
import Character from "../Character";

interface CharacterDisplayProps {
  character?: Character;
}

const DisplayCharacter = (props: CharacterDisplayProps) => {
  return (
    <div>
      <h1>Name: {props.character?.name} </h1>
      <h2>Birth Place: {props.character?.placeOfBirth} </h2>
      <h2>Day Born: {props.character?.dayOfBirth} </h2>
      <h2>Month Born: {props.character?.monthOfBirth} </h2>
      <h2>Year Born: {props.character?.yearOfBirth} </h2>
      {props.character?.hologram && <h3> Character is a Holograhm: </h3>}
      {props.character?.alternateReality && (
        <h3> Character is from an Alternate Reality </h3>
      )}
      {props.character?.maritalStatus && (
        <h3> Marital Status: {props.character?.maritalStatus} </h3>
      )}
    </div>
  );
};

export default DisplayCharacter;
