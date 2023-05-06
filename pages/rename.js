import StyledForm from "@/components/InputForm/Form";
import StyledInput from "@/components/InputForm/Input";
import StyledButton from "@/components/button";
import { useState } from "react";
import StyledFlexDiv from "@/components/FlexDiv";
import Image from "next/image";
import { uid } from "uid";
import styled from "styled-components";

export default function Rename({
  dataPrototype,
  changeCategoryName,
  deletCategory,
  addCategory,
  changeCategoryColor,
}) {
  const [categorySelected, setCategorySelected] = useState("Select");
  const [color, setColor] = useState("#ffffff");
  const [rename, setRename] = useState("Select");

  function handleRenameChange(event) {
    setRename(event.target.value);
  }

  function handleColorChange(event) {
    if (categorySelected !== "Select") {
      setColor(event.target.value);
      changeCategoryColor(categorySelected, event.target.value);
    }
  }

  function handleSelectChange(event) {
    const selectedOption = event.target.value;
    setCategorySelected(selectedOption);
    const colorOfSelectedOption = dataPrototype[selectedOption].color;
    setColor(colorOfSelectedOption);
    const nameOfSelectedOption = dataPrototype[selectedOption].name;
    setRename(nameOfSelectedOption);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (categorySelected !== "Select") {
      const newName = event.target.elements.rename.value;
      changeCategoryName(categorySelected, newName);
    }
  }

  function handleAddCategoryClick(event) {
    const newId = addCategory();
    setCategorySelected(newId);
  }

  function handleDeleteCategoryClick(event) {
    deletCategory(categorySelected);
  }
  return (
    <>
      {" "}
      <StyledFlexDiv>
        <Image
          height="100"
          width="100"
          alt="budgedbaer"
          src="/budget_baer.png"
        ></Image>
        <Heading1>BÄRENÄNDERUNG</Heading1>
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
            {" "}
            <option value="Select">Select...</option>
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
            <StyledInput
              id="rename"
              value={rename}
              onChange={(event) => {
                handleRenameChange(event);
              }}
            ></StyledInput>
          </label>

          <StyledButton type="submit">Umbenennen</StyledButton>
        </StyledForm>
        <input
          type="color"
          value={color}
          onChange={(event) => {
            handleColorChange(event);
          }}
        />
        <StyledButton
          onClick={(event) => {
            handleAddCategoryClick(event);
          }}
        >
          +
        </StyledButton>
        <StyledButton
          onClick={(event) => {
            handleDeleteCategoryClick(event);
          }}
        >
          -
        </StyledButton>
      </StyledFlexDiv>
    </>
  );
}

const Heading1 = styled.h1`
  margin: 0;
  padding: 0;
  font-size: 36px;
`;
