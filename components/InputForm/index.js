import { useState } from "react";
export default function InputForm({
  handleSubmit,
  inputFields,
  setInputFields,
  dataPrototype,
  handleEditClick,
  editModeForInputOn,
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
        if (editModeForInputOn[objectName].isOn) {
          return (
            <div key={objectName}>
              {" "}
              <button
                onClick={() => {
                  handleEditClick(objectName);
                }}
              >
                {" "}
                {"Zurück"}
              </button>
              <label htmlFor={objectName} key={objectName}>
                Umbenennen:
                <input
                  id={objectName}
                  type="text"
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
            </div>
          );
        }

        return (
          <div key={objectName}>
            {" "}
            <button
              onClick={() => {
                handleEditClick(objectName);
              }}
            >
              {" "}
              {"Editieren"}
            </button>
            <label htmlFor={objectName} key={objectName}>
              {dataPrototype[objectName].name}:
              <input
                id={objectName}
                type="number"
                value={objectValue.value}
                onChange={(event) => {
                  handleChange(event, objectName);
                }}
              ></input>
              €
              <br />
            </label>
          </div>
        );
      })}
      <br />
      <button>Speichern</button>
    </form>
  );
}
