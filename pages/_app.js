import "@/styles/globals.css";
import { useState } from "react";

const dataPrototype = {
  "9b51189fa12": {
    id: "9b51189fa12",
    name: "Groceries",
    color: "grey",
  },
  b51189fa126: {
    id: "b51189fa126",
    name: "House",
    color: "blue",
  },
  "51189fa126b": {
    id: "51189fa126b",
    name: "Fun",
    color: "red",
  },
  "1189fa126b6": {
    id: "1189fa126b6",
    name: "Children",
    color: "green",
  },
  be90e393b31: {
    id: "be90e393b31",
    name: "Savings",
    color: "violet",
  },
};

export default function App({ Component, pageProps }) {
  const [data, setData] = useState({});
  return (
    <Component
      {...pageProps}
      data={data}
      setData={setData}
      dataPrototype={dataPrototype}
    />
  );
}
