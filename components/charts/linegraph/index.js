import { useEffect, useState } from "react";
import {
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Line,
} from "recharts";

const months = [
  "Januar",
  "Februar",
  "März",
  "April",
  "Mai",
  "Juni",
  "Juli",
  "August",
  "September",
  "Oktober",
  "November",
  "Dezember",
];

export default function Linegraph({ data, currentYear, dataPrototype }) {
  const [rechartsData, setRechartsData] = useState([]);

  useEffect(() => {
    changeDataForRechart();
    function changeDataForRechart() {
      let newData = [];
      for (let month = 0; month < 12; month++) {
        const categoryName = dataPrototype["9b51189fa12"].name;
        let newMonth = { name: months[month], [categoryName]: 0 };
        if (data[currentYear]) {
          if (data[currentYear][month]) {
            if (data[currentYear][month]["9b51189fa12"]) {
              newMonth[categoryName] =
                data[currentYear][month]["9b51189fa12"].value;
            }
          }
        }
        newData.push(newMonth);
      }
      setRechartsData(newData);
    }
  }, [data, currentYear]);

  console.log("data", data);
  console.log("currentYear", currentYear);
  console.log("rechartsData", rechartsData);

  return (
    <LineChart
      width={350}
      height={250}
      data={rechartsData}
      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line
        type="monotone"
        dataKey={dataPrototype["9b51189fa12"].name}
        stroke="#8884d8"
      />
      <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
    </LineChart>
  );
}
