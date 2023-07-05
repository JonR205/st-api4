import React from "react";

interface NameInputProps { onChange: (value: string) => void }
function NameInput(props: NameInputProps) {
  return (
    <>
      <p>
        <input onChange={(event) => props.onChange(event.target.value)}
          id="username1"
          className="input "
          placeholder="Here"
        />
      </p>
    </>
  );
}

export default NameInput;
