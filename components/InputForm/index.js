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
  valueSumIst,
  valueSum,
}) {
  function handleChange(event, whichInputField) {
    let newInput = { ...inputFields };
    newInput[whichInputField].value = event.target.value;
    setInputFields(newInput);
  }
  function handleChangeIst(event, whichInputField) {
    let newInput = { ...inputFields };
    newInput[whichInputField].valueIst = event.target.value;
    setInputFields(newInput);
  }
  return (
    <StyledForm
      onSubmit={(event) => {
        handleSubmit(event);
      }}
    >
      <StyledGrid>
        <p>SOLL</p>

        <StyledButton>-</StyledButton>

        <p></p>
        {Object.entries(inputFields).map(([objectName, objectValue]) => {
          return (
            <React.Fragment key={objectName}>
              <label htmlFor={objectName} key={objectName}>
                {dataPrototype[objectName]?.name}:
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
        <p>Total: {valueSum}€</p>
      </StyledGrid>
      <StyledGrid>
        <p>IST</p>

        <StyledButton>-</StyledButton>

        <p></p>

        {Object.entries(inputFields).map(([objectName, objectValue]) => {
          return (
            <React.Fragment key={objectName}>
              <label htmlFor={`${objectName}Ist`} key={`${objectName}Ist`}>
                {dataPrototype[objectName]?.name}:
              </label>
              <StyledInput
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
        <p>Total: {valueSumIst}€</p>
      </StyledGrid>
    </StyledForm>
  );
}
