import React from "react";
import "../App.css";


interface ButtonProps {
  onSubmit: () => void
}
function SubmitButton(props: ButtonProps) {
  return (
    <button className="lcars-element button" onClick={props.onSubmit}>
      Click me!
    </button>
  );
}

export default SubmitButton;
