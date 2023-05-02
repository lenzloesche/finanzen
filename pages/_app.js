import "@/styles/globals.css";
import { useState } from "react";
const emptyData = {
  2023: {
    0: {
      Groceries: {
        value: 400,
        color: "grey",
      },
      House: {
        value: 800,
        color: "blue",
      },
      Fun: {
        value: 600,
        color: "red",
      },
      Children: {
        color: "green",
        value: 200,
      },
      Savings: {
        color: "violet",
        value: 300,
      },
    },
  },
};
export default function App({ Component, pageProps }) {
  const [data, setData] = useState(emptyData);
  return <Component {...pageProps} data={data} setData={setData} />;
}
