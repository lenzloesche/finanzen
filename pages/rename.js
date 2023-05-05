import StyledForm from "@/components/InputForm/Form";
import StyledInput from "@/components/InputForm/Input";
import StyledButton from "@/components/button";
import { useState } from "react";
import { uid } from "uid";

export default function Rename({
  dataPrototype,
  changeCategoryName,
  deletCategory,
}) {
  const [categorySelected, setCategorySelected] = useState("");

  function handleSelectChange(event) {
    const selectedOption = event.target.value;
    setCategorySelected(selectedOption);
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(event.target.elements.rename.value);
    const newName = event.target.elements.rename.value;
    changeCategoryName(categorySelected, newName);
  }
  return (
    <>
      <StyledForm
        onSubmit={(event) => {
          handleSubmit(event);
        }}
      >
        <select
          name="categories"
          id="categories"
          value={categorySelected}
          onChange={(event) => {
            handleSelectChange(event);
          }}
        >
          {Object.entries(dataPrototype).map((eachcategory) => {
            return (
              <option key={uid()} value={eachcategory[0]}>
                {eachcategory[1].name}
              </option>
            );
          })}
        </select>
        <label htmlFor="rename">
          Umbenennen:
          <StyledInput id="rename"></StyledInput>
        </label>
        <StyledButton type="submit">Umbenennen</StyledButton>
      </StyledForm>
    </>
  );
}
