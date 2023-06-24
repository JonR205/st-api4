import React from "react";

function NameInput() {
  return (
    <>
      <h2 id="textbox_section">Actor's Name</h2>
      {/* <span>
        Class: <pre className="lcars-dodger-blue-color">lcars-text-box</pre>
      </span> */}
      <h2 id="inputs_section">Inputs</h2>
      <span>
        Class: <pre className="lcars-dodger-blue-color">lcars-text-input</pre>
      </span>
      <p>
        {" "}
        Single-line
        <input
          id="username1"
          className="lcars-text-input decorated lcars-husk-color"
        />
      </p>
    </>
  );
}

export default NameInput;
