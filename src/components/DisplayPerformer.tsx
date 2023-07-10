import React from "react";
import Performer from "../Performer";
import "../App.css";

interface DisplayProps {
  performer?: Performer;
}
const DisplayPerformer = (props: DisplayProps) => {
  return (
    <div>
      {props.performer?.name && <h1> Name: {props.performer?.name} </h1>}
      {props.performer?.placeOfBirth && (
        <h2> Birth Place: {props.performer?.placeOfBirth} </h2>
      )}
      {props.performer?.dateOfBirth && (
        <h2>Born: {props.performer?.dateOfBirth} </h2>
      )}
      {props.performer?.tosPerformer && <h3> Appeared in Srar Trek: TOS </h3>}
      {props.performer?.tasPerformer && (
        <h3 className="h3"> Appeared in Srar Trek: The Animated Series </h3>
      )}
      {props.performer?.tngPerformer && <h3> Appeared in Srar Trek: TNG </h3>}
      {props.performer?.ds9Performer && (
        <h3> Appeared in Srar Trek: Deep Space 9 </h3>
      )}
      {props.performer?.voyPerformer && <h3> Appeared in Voyager </h3>}
      {props.performer?.entPerformer && (
        <h3> Appeared in Srar Trek: Enterprise </h3>
      )}
      {props.performer?.disPerformer && (
        <h3> Appeared in Srar Trek: Discovery </h3>
      )}
      {props.performer?.picPerformer && (
        <h3> Appeared in Srar Trek: Picard </h3>
      )}
      {props.performer?.snwPerformer && (
        <h3> Appeared in Srar Trek: Strange New Worlds </h3>
      )}
      {props.performer?.filmPerformer && <h3> Appeared in a film </h3>}
      {props.performer?.voicePerformer && <h3> Did Voice Over work </h3>}
      {props.performer?.videoGamePerformer && (
        <h3> Appeared in A video Game </h3>
      )}
      {props.performer?.stuntPerformer && <h3> Did Stunt Work </h3>}
      {props.performer?.standInPerformer && <h3>Did Stand in Work </h3>}
      {props.performer?.audiobookPerformer && (
        <h3> Did voice work on an Audiobook </h3>
      )}
      {props.performer?.puppeteer && <h3> Was a Puppeteer </h3>}
    </div>
  );
};

export default DisplayPerformer;
