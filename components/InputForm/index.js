import { useState } from "react";
export default function InputForm({
  handleSubmit,
  inputFields,
  setInputFields,
}) {
  function handleChange(event, whichInputField) {
    let newInput = { ...inputFields };
    newInput[whichInputField].value = event.target.value;
    setInputFields(newInput);
  }
  console.log("inputFields", inputFields);
  return (
    <form
      onSubmit={(event) => {
        handleSubmit(event);
      }}
    >
      {Object.entries(inputFields).map(([objectName, objectValue]) => {
        return (
          <label htmlFor={objectName} key={objectName}>
            {objectName}:
            <input
              id={objectName}
              type="number"
              value={objectValue.value}
              onChange={(event) => {
                handleChange(event, objectName);
              }}
            ></input>
            <br />
          </label>
        );
      })}
      <br />
      <button>Save</button>
    </form>
  );
}
