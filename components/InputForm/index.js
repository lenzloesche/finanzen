import StyledInput from "./Input";
import StyledGrid from "./Grid";
import StyledForm from "./Form";
import React from "react";

export default function InputForm({ handleSubmit, inputFields, setInputFields, dataPrototype, valueSumIst, valueSum }) {
  function handleChange(event, whichInputField) {
    let newInput = { ...inputFields };
    if (event.target.value <= 0 || event.target.value === "") {
      newInput[whichInputField].value = 0;
    } else {
      if (!newInput[whichInputField]) {
        newInput[whichInputField] = { value: 0, valueIst: 0 };
      }

      newInput[whichInputField].value = parseInt(event.target.value, 10);
      event.target.value = parseInt(event.target.value, 10);
    }
    setInputFields(newInput);
  }
  function handleChangeIst(event, whichInputField) {
    let newInput = { ...inputFields };
    if (event.target.value <= 0 || event.target.value === "") {
      newInput[whichInputField].valueIst = 0;
    } else {
      if (!newInput[whichInputField]) {
        newInput[whichInputField] = { value: 0, valueIst: 0 };
      }
      newInput[whichInputField].valueIst = parseInt(event.target.value, 10);
      event.target.value = parseInt(event.target.value, 10);
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
        {Object.entries(dataPrototype).map(([objectName, objectValue]) => {
          return (
            <React.Fragment key={objectName}>
              <label htmlFor={objectName} key={objectName}>
                {dataPrototype[objectName]?.name}:
              </label>
              <StyledInput
                min="0"
                id={objectName}
                type="number"
                value={inputFields[objectName].value}
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

        {Object.entries(dataPrototype).map(([objectName, objectValue]) => {
          return (
            <React.Fragment key={objectName}>
              <label htmlFor={`${objectName}Ist`} key={`${objectName}Ist`}>
                {dataPrototype[objectName]?.name}:
              </label>
              <StyledInput
                min="0"
                id={`${objectName}Ist`}
                type="number"
                value={inputFields[objectName].valueIst}
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
