import "@/styles/globals.css";
import { useState } from "react";
const emptyData = [
  {
    name: "Groceries",
    value: 400,
    color: "grey",
  },
  {
    name: "House",
    value: 800,
    color: "blue",
  },
  {
    name: "Fun",
    value: 600,
    color: "red",
  },
  {
    name: "Children",
    color: "green",
    value: 200,
  },
  {
    name: "Savings",
    color: "violet",
    value: 300,
  },
];

export default function App({ Component, pageProps }) {
  const [data, setData] = useState(emptyData);
  return <Component {...pageProps} data={data} setData={setData} />;
}
