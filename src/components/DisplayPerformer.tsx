import React from "react";
import Performer from "../Performer";

interface DisplayProps {
  performer?: Performer;
}
const DisplayPerformer = (props: DisplayProps) => {
  return (
    <div>
      <h1> {props.performer?.name} </h1>
      <h2> </h2>
    </div>
  );
};

export default DisplayPerformer;
