import StyledButton from "@/components/button";
import { useState } from "react";
import StyledFlexDiv from "@/components/FlexDiv";
import Image from "next/image";
import { uid } from "uid";
import styled from "styled-components";
import Head from "next/head";

export default function Rename({ categories, changeCategoryName, deletCategory, addCategory, changeCategoryColor }) {
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
    if (selectedOption === "Select") {
      setRename("Select");
    } else {
      const colorOfSelectedOption = categories[selectedOption].color;
      setColor(colorOfSelectedOption);
      const nameOfSelectedOption = categories[selectedOption].name;
      setRename(nameOfSelectedOption);
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (categorySelected !== "Select") {
      const newName = event.target.elements.rename.value;
      changeCategoryName(categorySelected, newName);
    }
  }

  function handleAddCategoryClick() {
    const newId = addCategory();
    setCategorySelected(newId);
    setColor("#ffffff");
    setRename("Neu");
  }

  function handleDeleteCategoryClick() {
    deletCategory(categorySelected);
    setCategorySelected("Select");
    setRename("Select");
  }
  return (
    <>
      <Head>
        <title>Budgetbär</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <StyledFlexDiv>
        <Image height="100" width="100" alt="budgedbaer" src="/budget_baer.png"></Image>
        <Heading1>BÄRENÄNDERUNG</Heading1>
        <StyledFormVertical
          onSubmit={(event) => {
            handleSubmit(event);
          }}
        >
          <br />
          <h2>Kategorie wählen, um sie zu ändern.</h2>

          <select
            name="categories"
            id="categories"
            value={categorySelected}
            onChange={(event) => {
              handleSelectChange(event);
            }}
          >
            <option value="Select">Kategorie wählen</option>
            {Object.entries(categories).map((eachcategory) => {
              return (
                <option key={uid()} value={eachcategory[0]}>
                  {eachcategory[1].name}
                </option>
              );
            })}
          </select>
          <br />
          {categorySelected === "Select" ? (
            ""
          ) : (
            <>
              {" "}
              <label htmlFor="rename">Hier den neuen Namen eintragen::</label>
              <input
                id="rename"
                value={rename}
                maxLength={10}
                onChange={(event) => {
                  handleRenameChange(event);
                }}
              ></input>
              <StyledButton type="submit">Umbenennen</StyledButton>
            </>
          )}
        </StyledFormVertical>
        {categorySelected === "Select" ? (
          ""
        ) : (
          <>
            {" "}
            <input
              type="color"
              value={color}
              onChange={(event) => {
                handleColorChange(event);
              }}
            />
            <br />
            <StyledButton onClick={handleDeleteCategoryClick}>Kategorie Löschen</StyledButton>
          </>
        )}

        <br />
        <StyledButton onClick={handleAddCategoryClick}>Neue Kategorie hinzufügen</StyledButton>
      </StyledFlexDiv>
    </>
  );
}

const StyledFormVertical = styled.form`
  display: flex;
  flex-direction: column;
`;

const Heading1 = styled.h1`
  margin: 0;
  padding: 0;
  font-size: 36px;
`;
