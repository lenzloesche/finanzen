import "@/styles/globals.css";
import { useEffect, useState } from "react";
import { uid } from "uid";
import StyledButton from "@/components/button";

const dataPrototype = {
  "9b51189fa12": {
    id: "9b51189fa12",
    name: "Einkauf",
    color: "#c0d313",
  },
  b51189fa126: {
    id: "b51189fa126",
    name: "Miete",
    color: "blue",
  },
  "51189fa126b": {
    id: "51189fa126b",
    name: "Spaß",
    color: "red",
  },
  "1189fa126b6": {
    id: "1189fa126b6",
    name: "Kinder",
    color: "green",
  },
  be90e393b31: {
    id: "be90e393b31",
    name: "Sparen",
    color: "violet",
  },
};

export default function App({ Component, pageProps }) {
  const [data, setData] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);
  const [categories, setCategories] = useState(dataPrototype);

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
      const savedCategories = JSON.parse(
        localStorage.getItem("budgetBaerCategories")
      );
      if (savedCategories === null) {
        setCategories(dataPrototype);
      } else {
        setCategories(savedCategories);
      }
    }

    setIsLoaded(true);
  }, []);

  function saveData(dataToSave) {
    localStorage.setItem("budgetBaerData", JSON.stringify(dataToSave));
  }

  function saveCategories(newCategories) {
    localStorage.setItem("budgetBaerCategories", JSON.stringify(newCategories));
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
        saveCategories={saveCategories}
      />
      <footer>
        <a href="/">
          <StyledButton>Main</StyledButton>
        </a>
        <a href="/rename">
          <StyledButton>rename</StyledButton>
        </a>
        <a href="/expenses-graph">
          <StyledButton>expenses-graph</StyledButton>
        </a>
      </footer>
    </>
  );
}
