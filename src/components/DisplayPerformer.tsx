import React from "react";
import Performer from "../Performer";

interface DisplayProps {
    performer?: Performer
}
const DisplayPerformer = (props: DisplayProps) => {
    return (

        <h1> {props.performer?.name} </h1>

    )
}

export default DisplayPerformer