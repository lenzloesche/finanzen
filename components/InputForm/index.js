import StyledButton from "../button";
import StyledInput from "./Input";
import StyledGrid from "./Grid";
import StyledForm from "./Form";
import React from "react";

export default function InputForm({
  handleSubmit,
  inputFields,
  setInputFields,
  dataPrototype,
}) {
  function handleChange(event, whichInputField) {
    let newInput = { ...inputFields };
    newInput[whichInputField].value = event.target.value;
    setInputFields(newInput);
  }

  return (
    <StyledForm
      onSubmit={(event) => {
        handleSubmit(event);
      }}
    >
      <StyledGrid>
        {Object.entries(inputFields).map(([objectName, objectValue]) => {
          return (
            <React.Fragment key={objectName}>
              <label htmlFor={objectName} key={objectName}>
                {dataPrototype[objectName].name}:
              </label>
              <StyledInput
                id={objectName}
                type="number"
                value={objectValue.value}
                onChange={(event) => {
                  handleChange(event, objectName);
                  handleSubmit(event);
                }}
              ></StyledInput>
              <p> €</p>
            </React.Fragment>
          );
        })}
      </StyledGrid>
    </StyledForm>
  );
}
