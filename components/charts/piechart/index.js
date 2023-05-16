import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { useState } from "react";
import { useEffect } from "react";
import styled from "styled-components";

export default function MyPieChart({ data, categories, difference }) {
  const [dataArray, setDataArray] = useState([]);
  const [dataArrayIst, setDataArrayIst] = useState([]);
  const [drawBear, setDrawBear] = useState(true);
  const [drawBearIst, setDrawBearIst] = useState(true);

  function renderLabel({ name, value }) {
    if (value !== 0) {
      return `${name}`;
    }
  }

  function renderInnerLabel({ name, value, index }) {
    if (value !== 0 && dataArrayIst[index].value === 0) {
      return `${name}`;
    }
  }

  useEffect(() => {
    let ueberschuss = 0;
    let ueberschussIst = 0;
    if (difference >= 0) {
      ueberschuss = difference;
    } else {
      ueberschussIst = -difference;
    }

    convertDataObjectToArray();
    convertDataObjectToArrayIst();
    function convertDataObjectToArray() {
      let howManyNonZeros = 0;
      const newArray = Object.entries(categories).map(([objectId, objectValue]) => {
        const valueSoll = data?.[objectId]?.value;
        if (valueSoll) {
          howManyNonZeros += Number(valueSoll);
        }
        return {
          name: objectValue.name,
          color: objectValue.color,
          value: valueSoll,
        };
      });
      newArray.push({
        name: "",
        color: "#efefef",
        value: ueberschuss,
      });

      if (howManyNonZeros > 0) {
        setDrawBear(true);
      } else {
        setDrawBear(false);
      }
      setDataArray(newArray);
    }
    function convertDataObjectToArrayIst() {
      let howManyNonZeros = 0;
      const newArray = Object.entries(categories).map(([objectId, objectValue]) => {
        const valueIst = data?.[objectId]?.valueIst;
        if (valueIst) {
          howManyNonZeros += Number(valueIst);
        }
        return {
          name: objectValue.name,
          color: objectValue.color,
          value: valueIst,
        };
      });
      newArray.push({
        name: "",
        color: "#efefef",
        value: ueberschussIst,
      });
      if (howManyNonZeros > 0) {
        setDrawBearIst(true);
      } else {
        setDrawBearIst(false);
      }
      setDataArrayIst(newArray);
    }
  }, [data]);

  return (
    <StyledContainerDiv drawBear={drawBear} drawBearIst={drawBearIst}>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart id="piechart" width={350} height={300}>
          <Pie
            data={dataArrayIst}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            innerRadius={80}
            outerRadius={120}
            fill="#82ca9d"
            label={renderLabel}
            labelLine={false}
            position="inside"
            animationBegin={0}
            animationDuration={300}
            animationEasing="linear"
          >
            {dataArray?.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>{" "}
          <Pie
            data={dataArray}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            innerRadius={45}
            outerRadius={80}
            label={renderInnerLabel}
            labelLine={false}
            fill="#82ca9d"
            position="inside"
            animationDuration={300}
            animationBegin={0}
            animationEasing="linear"
          >
            {dataArray?.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </StyledContainerDiv>
  );
}

const StyledContainerDiv = styled.div`
  width: 350px;
  height: 320px;
  ${(props) => (!props.drawBear && !props.drawBearIst ? "background-image: url('piechartbackgroundbaer.png');  background-size: cover;" : "")}
  border-radius: 10px;
  background-color: #efefef;
  @media (min-width: 440px) {
    width: 440px;
  }
`;
