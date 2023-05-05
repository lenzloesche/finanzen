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
import { uid } from "uid";

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
        let newMonth = {};
        Object.keys(dataPrototype).forEach((element) => {
          const categoryName = dataPrototype[element].name;

          if (data[currentYear]) {
            if (data[currentYear][month]) {
              if (data[currentYear][month][element]) {
                newMonth[categoryName] =
                  data[currentYear][month][element].value;
              }
            }
          }
        });
        newData.push(newMonth);
      }
      setRechartsData(newData);
    }
  }, [data, currentYear]);

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

      {Object.keys(dataPrototype).map((key, index) => {
        return (
          <Line
            key={uid()}
            type="monotone"
            dataKey={dataPrototype[key].name}
            stroke={dataPrototype[key].color}
          />
        );
      })}
    </LineChart>
  );
}
