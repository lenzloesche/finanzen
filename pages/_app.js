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
  const [categories, setCategories] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);

  function changeCategoryName(id, newName) {
    const newCategories = JSON.parse(JSON.stringify(categories));
    newCategories[id].name = newName;
    setCategories(newCategories);
  }

  function changeCategoryColor(id, newColor) {
    const newCategories = JSON.parse(JSON.stringify(categories));
    newCategories[id].color = newColor;
    setCategories(newCategories);
  }

  function deletCategory(id) {
    const newCategories = JSON.parse(JSON.stringify(categories));
    delete newCategories[id];
    setCategories(newCategories);
  }

  function addCategory() {
    const newCategories = JSON.parse(JSON.stringify(categories));
    const newId = uid();
    newCategories[newId] = { id: newId, name: "Neu", color: "red" };
    setCategories(newCategories);
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
      console.log("savedCategories", savedCategories);
      if (!savedCategories) {
        setCategories(dataPrototype);
      } else {
        setCategories(savedCategories);
      }
    }

    setIsLoaded(true);
  }, []);

  useEffect(() => {
    saveCategories();
    function saveCategories() {
      if (isLoaded) {
        localStorage.setItem(
          "budgetBaerCategories",
          JSON.stringify(categories)
        );
      }
    }
  }, [categories]);

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
