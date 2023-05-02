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

  function handleColorChange(event, whichInputField) {
    console.log(event.target.value);
    let newInput = { ...inputFields };
    newInput[whichInputField].color = event.target.value;
    setInputFields(newInput);
  }
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
            €
            <input
              type="color"
              value={objectName.color}
              onChange={(event) => {
                handleColorChange(event, objectName);
              }}
            />
            <br />
          </label>
        );
      })}

      <br />
      <button>Save</button>
    </form>
  );
}
