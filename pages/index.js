import Head from "next/head";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import InputForm from "@/components/InputForm";
import Image from "next/image";
import Calendar from "@/components/calendar";
import styled from "styled-components";
import FlexDiv from "@/components/FlexDiv";

const MyPieChart = dynamic(() => import("@/components/charts/piechart"), {
  ssr: false,
});
const startingInput = {
  total: {
    valueSum: 0,
    valueSumIst: 0,
    difference: 0,
  },

  "9b51189fa12": {
    value: 0,
    valueIst: 0,
  },
  b51189fa126: {
    value: 0,
    valueIst: 0,
  },
  "51189fa126b": {
    value: 0,
    valueIst: 0,
  },
  "1189fa126b6": {
    value: 0,
    valueIst: 0,
  },
  be90e393b31: {
    value: 0,
    valueIst: 0,
  },
};

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

export default function Home({
  data,
  setData,
  dataPrototype,
  saveData,
  isLoaded,
  setIsLoaded,
}) {
  const [currentYear, setCurrentYear] = useState(2023);
  const [currentMonth, setCurrentMonth] = useState(0);
  const [currentData, setCurrentData] = useState([]);
  const [inputFields, setInputFields] = useState(
    JSON.parse(JSON.stringify(startingInput))
  );

  useEffect(() => {
    if (isLoaded === true) {
      switchDates(currentYear, currentMonth);
      setIsLoaded(false);
    }
  }, [data]);

  function handleEditClick(id) {
    const newEditModeForInputOn = {
      ...editModeForInputOn,
      [id]: { isOn: !editModeForInputOn[id].isOn },
    };
    setEditModeForInputOn(newEditModeForInputOn);
  }

  function clearInputFields(newData) {
    setInputFields(newData);
  }

  function calculateSum(arrayOfNumbers) {
    let countSum = 0;
    for (const number of arrayOfNumbers) {
      countSum += number;
    }
    return countSum;
  }

  function handleSubmit(event) {
    event.preventDefault();

    let newData = { total: { valueSum: 0, valueSumIst: 0, difference: 0 } };

    const arrayOfInputFields = Object.entries(dataPrototype).map(
      ([key, value]) => ({ key, value })
    );

    for (let i = 0; i < arrayOfInputFields.length; i++) {
      const newObject = {
        value: parseInt(inputFields[arrayOfInputFields[i].key].value),
        valueIst: parseInt(inputFields[arrayOfInputFields[i].key].valueIst),
      };
      const idOfInputField = arrayOfInputFields[i].key;
      newData = { ...newData, [idOfInputField]: { ...newObject } };
    }
    let newFullData = createYearAndMonth(
      { ...data },
      currentYear,
      currentMonth
    );

    const arrayofNumbers = Object.entries(newData).map(([key, value]) => {
      if (key != "total") {
        return value.value;
      } else {
        return 0;
      }
    });
    newData["total"]["valueSum"] = calculateSum(arrayofNumbers);
    const arrayofNumbersIst = Object.entries(newData).map(([key, value]) => {
      if (key != "total") {
        return value.valueIst;
      } else {
        return 0;
      }
    });
    newData["total"]["valueSumIst"] = calculateSum(arrayofNumbersIst);
    newData["total"].difference =
      newData["total"]["valueSumIst"] - newData["total"]["valueSum"];
    newFullData[currentYear][currentMonth] = newData;
    setData(newFullData);
    setCurrentData(newData);
    saveData(newFullData);
  }

  function switchDates(switchToYear, switchToMonth) {
    const newFullData = createYearAndMonth(
      { ...data },
      switchToYear,
      switchToMonth
    );
    const newData = { ...newFullData[switchToYear][switchToMonth] };
    setData(newFullData);
    setCurrentData(newData);
    clearInputFields(newData);
  }

  function createYearAndMonth(newFullData, yearToCreate, monthToCreate) {
    let fullDataCopy = { ...newFullData };
    if (!fullDataCopy[yearToCreate]) {
      fullDataCopy[yearToCreate] = {};
    }
    if (!fullDataCopy[yearToCreate][monthToCreate]) {
      fullDataCopy[yearToCreate][monthToCreate] = JSON.parse(
        JSON.stringify(startingInput)
      );
    }
    return fullDataCopy;
  }

  function handleMinusYear() {
    setCurrentYear(currentYear - 1);
    switchDates(currentYear - 1, currentMonth);
  }
  function handlePlusYear() {
    setCurrentYear(currentYear + 1);
    switchDates(currentYear + 1, currentMonth);
  }
  function handleMinusMonth() {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
      switchDates(currentYear - 1, 11);
    } else {
      setCurrentMonth(currentMonth - 1);
      switchDates(currentYear, currentMonth - 1);
    }
  }
  function handlePlusMonth() {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
      switchDates(currentYear + 1, 0);
    } else {
      setCurrentMonth(currentMonth + 1);
      switchDates(currentYear, currentMonth + 1);
    }
  }

  return (
    <>
      <Head>
        <title>Finanzen</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <FlexDiv>
          <Image
            height="100"
            width="100"
            alt="budgedbaer"
            src="/budget_baer.png"
          ></Image>
          <Heading1>BÄRENÜBERSICHT</Heading1>
          <Calendar
            handleMinusYear={handleMinusYear}
            handlePlusYear={handlePlusYear}
            currentYear={currentYear}
            handleMinusMonth={handleMinusMonth}
            handlePlusMonth={handlePlusMonth}
            currentMonth={months[currentMonth]}
          />{" "}
          <MyPieChart
            data={currentData}
            dataPrototype={dataPrototype}
            difference={currentData.total?.difference}
          ></MyPieChart>
          <InputForm
            handleSubmit={handleSubmit}
            inputFields={inputFields}
            setInputFields={setInputFields}
            dataPrototype={dataPrototype}
            handleEditClick={handleEditClick}
            valueSum={currentData.total?.valueSum}
            valueSumIst={currentData.total?.valueSumIst}
            difference={currentData.total?.difference}
          />{" "}
        </FlexDiv>
      </main>
    </>
  );
}

const Heading1 = styled.h1`
  margin: 0;
  padding: 0;
  font-size: 36px;
`;
