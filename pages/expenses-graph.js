import StyledCalendar from "@/components/calendar";
import Linegraph from "@/components/charts/linegraph";
import StyledFlexDiv from "@/components/FlexDiv";
import Image from "next/image";
import styled from "styled-components";

export default function ExpensesGraph({ data, categories, currentYear, setCurrentYear }) {
  function handleMinusYear() {
    setCurrentYear(currentYear - 1);
  }
  function handlePlusYear() {
    setCurrentYear(currentYear + 1);
  }
  return (
    <>
      <StyledFlexDiv>
        <Image height="100" width="100" alt="budgedbaer" src="/budget_baer.png"></Image>
        <Heading1>BÄRENGRAPH</Heading1>
        <StyledCalendar handleMinus={handleMinusYear} handlePlus={handlePlusYear} current={currentYear} />
        <Linegraph whichValue="value" title="SOLL" data={data} currentYear={currentYear} categories={categories} />
        <Linegraph whichValue="valueIst" title="IST" data={data} currentYear={currentYear} categories={categories} />
      </StyledFlexDiv>
    </>
  );
}
const Heading1 = styled.h1`
  margin: 0;
  padding: 0;
  font-size: 36px;
`;
