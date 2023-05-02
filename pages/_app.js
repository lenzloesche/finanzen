import "@/styles/globals.css";
import { useEffect, useState } from "react";

const dataPrototype = {
  "9b51189fa12": {
    id: "9b51189fa12",
    name: "Einkauf",
    color: "grey",
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

  useEffect(() => {
    loadData();
    function loadData() {
      const data = JSON.parse(localStorage.getItem("budgetBaerData"));
      console.log(data);
      setData(data);
    }
  }, []);

  function saveData(dataToSave) {
    localStorage.setItem("budgetBaerData", JSON.stringify(dataToSave));
  }

  return (
    <>
      <Component
        {...pageProps}
        data={data}
        setData={setData}
        dataPrototype={dataPrototype}
        saveData={saveData}
      />
    </>
  );
}
