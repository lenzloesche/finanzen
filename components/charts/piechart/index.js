import { PieChart, Pie, Cell, Label } from "recharts";
import { useState } from "react";
import { useEffect } from "react";
import styled from "styled-components";

export default function MyPieChart({
  data,
  dataPrototype,
  valueSumIst,
  valueSum,
}) {
  const [dataArray, setDataArray] = useState([]);
  const [dataArrayIst, setDataArrayIst] = useState([]);

  function renderLabel({ name, value }) {
    return `${name}`;
  }
  useEffect(() => {
    let ueberschuss = 0;
    let ueberschussIst = 0;
    const subtraction = valueSumIst - valueSum;
    if (subtraction >= 0) {
      ueberschuss = subtraction;
    } else {
      ueberschussIst = -subtraction;
    }

    convertDataObjectToArray();
    convertDataObjectToArrayIst();
    function convertDataObjectToArray() {
      const newArray = Object.entries(data).map(([objectName, objectValue]) => {
        return {
          name: dataPrototype[objectName]?.name,
          color: dataPrototype[objectName]?.color,
          value: objectValue.value,
        };
      });
      newArray.push({
        name: "",
        color: "#efefef",
        value: ueberschuss,
      });
      setDataArray(newArray);
    }
    function convertDataObjectToArrayIst() {
      const newArray = Object.entries(data).map(([objectName, objectValue]) => {
        return {
          name: dataPrototype[objectName]?.name,
          color: dataPrototype[objectName]?.color,
          value: objectValue.valueIst,
        };
      });
      newArray.push({
        name: "",
        color: "#efefef",
        value: ueberschussIst,
      });
      setDataArrayIst(newArray);
    }
  }, [data]);
  return (
    <ContainerDiv>
      <PieChart id="piechart" width={350} height={300}>
        <Pie
          data={dataArray}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          innerRadius={45}
          outerRadius={80}
          fill="#82ca9d"
          position="inside"
          animationDuration={300}
          animationEasing="linear"
        >
          {dataArray?.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
        <Pie
          data={dataArrayIst}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          innerRadius={80}
          outerRadius={110}
          fill="#82ca9d"
          label={renderLabel}
          position="inside"
          animationDuration={300}
          animationEasing="linear"
        >
          {dataArray?.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
      </PieChart>
    </ContainerDiv>
  );
}

const ContainerDiv = styled.div`
  width: 350px;
  height: 300px;
  background-image: url("piechartbackgroundbaer.png");
  background-size: cover;

  border-radius: 10px;
  background-color: #efefef;
`;
