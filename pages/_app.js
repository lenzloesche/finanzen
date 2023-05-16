import "@/styles/globals.css";
import { useEffect, useState } from "react";
import { uid } from "uid";
import StyledButton from "@/components/button";
import StyledFooter from "@/components/footer";
import Link from "next/link";
import startingInput from "@/utils/data/starting-input";
import dataPrototype from "@/utils/data/dataPrototype";

export default function App({ Component, pageProps }) {
  const [data, setData] = useState({});
  const [currentYear, setCurrentYear] = useState(2023);
  const [categories, setCategories] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);
  const [inputFields, setInputFields] = useState(JSON.parse(JSON.stringify(startingInput)));

  function clearInputFields(newData) {
    const changeNewData = JSON.parse(JSON.stringify(newData));
    Object.entries(categories).forEach(([elementId, elementValue]) => {
      if (!changeNewData[elementId]) {
        changeNewData[elementId] = {
          value: 0,
          valueIst: 0,
        };
      }
    });
    setInputFields(changeNewData);
  }

  function addInputField(atWhichId) {
    const newInputFields = JSON.parse(JSON.stringify(inputFields));
    newInputFields[atWhichId] = {
      value: 0,
      valueIst: 0,
    };
    setInputFields(newInputFields);
  }

  function changeCategoryName(id, newName) {
    const newCategories = JSON.parse(JSON.stringify(categories));
    newCategories[id].name = newName;
    setCategories(newCategories);
    saveCategories(newCategories);
  }

  function changeCategoryColor(id, newColor) {
    const newCategories = JSON.parse(JSON.stringify(categories));
    newCategories[id].color = newColor;
    setCategories(newCategories);
    saveCategories(newCategories);
  }

  function deletCategory(id) {
    const newCategories = JSON.parse(JSON.stringify(categories));
    delete newCategories[id];
    setCategories(newCategories);
    saveCategories(newCategories);
  }

  function addCategory() {
    const newCategories = JSON.parse(JSON.stringify(categories));
    const newId = uid();
    newCategories[newId] = { id: newId, name: "Neu", color: "red" };
    setCategories(newCategories);
    saveCategories(newCategories);
    addInputField(newId);
    return newId;
  }

  useEffect(() => {
    loadData();
    function loadData() {
      const data = JSON.parse(localStorage.getItem("budgetBaerData"));
      if (data === null) {
        setData({});
      } else {
        setData(data);
      }
    }

    loadCategories();
    function loadCategories() {
      const savedCategories = JSON.parse(localStorage.getItem("budgetBaerCategories"));
      if (!savedCategories) {
        setCategories(dataPrototype);
      } else {
        setCategories(savedCategories);
        const newInputFields = { ...inputFields };
        Object.entries(savedCategories).forEach(([elementId, elementValue]) => {
          newInputFields[elementId] = {
            value: 0,
            valueIst: 0,
          };
          setInputFields(newInputFields);
        });
      }
    }

    setIsLoaded(true);
  }, []);

  function saveCategories(categoryToSave) {
    localStorage.setItem("budgetBaerCategories", JSON.stringify(categoryToSave));
  }

  function saveData(dataToSave) {
    localStorage.setItem("budgetBaerData", JSON.stringify(dataToSave));
  }

  return (
    <>
      <Component
        {...pageProps}
        data={data}
        setData={setData}
        dataPrototype={categories}
        saveData={saveData}
        isLoaded={isLoaded}
        setIsLoaded={setIsLoaded}
        changeCategoryName={changeCategoryName}
        deletCategory={deletCategory}
        addCategory={addCategory}
        changeCategoryColor={changeCategoryColor}
        inputFields={inputFields}
        clearInputFields={clearInputFields}
        setInputFields={setInputFields}
        addInputField={addInputField}
        currentYear={currentYear}
        setCurrentYear={setCurrentYear}
      />
      <StyledFooter>
        <Link href="/">
          <StyledButton>Start</StyledButton>
        </Link>
        <Link href="/rename">
          <StyledButton>Kategorien</StyledButton>
        </Link>
        <Link href="/expenses-graph">
          <StyledButton>Graphen</StyledButton>
        </Link>
      </StyledFooter>
    </>
  );
}
