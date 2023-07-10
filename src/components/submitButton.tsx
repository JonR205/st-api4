import React from "react";
import "../App.css";


interface ButtonProps {
  onSubmit: () => void
}
function SubmitButton(props: ButtonProps) {
  return (
    <button className="lcars-element button button:active" onClick={props.onSubmit} style={{left: "0.5rem"}}>
      Click me!
    </button>
  );
}

export default SubmitButton;
