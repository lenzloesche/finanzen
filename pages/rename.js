import StyledForm from "@/components/InputForm/Form";
import StyledInput from "@/components/InputForm/Input";
import { useState } from "react";
import { uid } from "uid";

export default function Rename({ dataPrototype }) {
  const [categorySelected, setCategorySelected] = useState("");

  function handleSelectChange(event) {
    const selectedOption = event.target.value;
    setCategorySelected(selectedOption);
  }
  return (
    <>
      <StyledForm>
        <select
          name="cars"
          id="cars"
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
      </StyledForm>
    </>
  );
}
