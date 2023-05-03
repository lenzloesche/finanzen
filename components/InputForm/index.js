import StyledInput from "./Input";
import StyledGrid from "./Grid";
import StyledForm from "./Form";
import React from "react";

export default function InputForm({
  handleSubmit,
  inputFields,
  setInputFields,
  dataPrototype,
  valueSumIst,
  valueSum,
}) {
  function handleChange(event, whichInputField) {
    let newInput = { ...inputFields };
    if (event.target.value < 0) {
      newInput[whichInputField].value = 0;
    } else {
      newInput[whichInputField].value = event.target.value;
    }
    setInputFields(newInput);
  }
  function handleChangeIst(event, whichInputField) {
    let newInput = { ...inputFields };

    if (event.target.value < 0) {
      newInput[whichInputField].valueIst = 0;
    } else {
      newInput[whichInputField].valueIst = event.target.value;
    }
    setInputFields(newInput);
  }
  return (
    <StyledForm
      onSubmit={(event) => {
        handleSubmit(event);
      }}
    >
      <StyledGrid>
        <p></p>
        <p>SOLL</p>
        <p></p>
        {Object.entries(inputFields).map(([objectName, objectValue]) => {
          if (objectName === "total") {
            return;
          }
          return (
            <React.Fragment key={objectName}>
              <label htmlFor={objectName} key={objectName}>
                {dataPrototype[objectName]?.name}:
              </label>
              <StyledInput
                min="0"
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
        <p></p>
        <p>Total: {valueSum}€</p>
      </StyledGrid>
      <StyledGrid>
        <p></p>
        <p>IST</p>
        <p></p>

        {Object.entries(inputFields).map(([objectName, objectValue]) => {
          if (objectName === "total") {
            return;
          }
          return (
            <React.Fragment key={objectName}>
              <label htmlFor={`${objectName}Ist`} key={`${objectName}Ist`}>
                {dataPrototype[objectName]?.name}:
              </label>
              <StyledInput
                min="0"
                id={`${objectName}Ist`}
                type="number"
                value={objectValue.valueIst}
                onChange={(event) => {
                  handleChangeIst(event, objectName);
                  handleSubmit(event);
                }}
              ></StyledInput>
              <p> €</p>
            </React.Fragment>
          );
        })}
        <p></p>
        <p>Total: {valueSumIst}€</p>
        <p></p>
      </StyledGrid>
    </StyledForm>
  );
}
