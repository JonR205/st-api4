import React from "react";
import "../App.css";

const apiGet = () => {

  const requestOptions = {
    method: 'POST',
    // headers: { 'Content-Type': 'application/json' },
    // body: JSON.stringify({ title: 'React POST Request Example' })
};

  fetch(
    "https://stapi.co/api/v2/rest/performer/search?title=william%20shatner&name=william%20shatner", requestOptions
  )
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
