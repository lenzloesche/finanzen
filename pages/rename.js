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

  function handleAddCategoryClick(event) {
    addCategory();
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
