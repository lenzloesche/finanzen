import StyledButton from "../button";
import StyledInput from "./Input";
import StyledGrid from "./Grid";

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
    <form
      onSubmit={(event) => {
        handleSubmit(event);
      }}
    >
      <StyledGrid>
        {Object.entries(inputFields).map(([objectName, objectValue]) => {
          return (
            <>
              <label htmlFor={objectName} key={objectName}>
                {dataPrototype[objectName].name}:
              </label>
              <StyledInput
                id={objectName}
                type="number"
                value={objectValue.value}
                onChange={(event) => {
                  handleChange(event, objectName);
                }}
              ></StyledInput>
              <p> €</p>
            </>
          );
        })}
      </StyledGrid>
      <br />
      <StyledButton>Speichern</StyledButton>
    </form>
  );
}
