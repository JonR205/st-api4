import React from "react";
import "../App.css";

const apiGet = () => {
  fetch("https://catfact.ninja/fact")
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
    });
};

function Button() {
  return (
    <button className="lcars-element button" onClick={apiGet}>
      Click me!
    </button>
  );
}

export default Button;
