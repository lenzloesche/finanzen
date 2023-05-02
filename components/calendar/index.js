import styled from "styled-components";
import StyledButton from "../button";

export default function Calendar({
  handleMinusYear,
  handlePlusYear,
  handleMinusMonth,
  handlePlusMonth,
  currentYear,
  currentMonth,
}) {
  return (
    <>
      <Banner>
        <StyledButton onClick={handleMinusYear}>-</StyledButton>{" "}
        <Heading2>{currentYear}</Heading2>{" "}
        <StyledButton onClick={handlePlusYear}>+</StyledButton>
      </Banner>
      <Banner>
        <StyledButton onClick={handleMinusMonth}>-</StyledButton>{" "}
        <Heading3>{currentMonth}</Heading3>{" "}
        <StyledButton onClick={handlePlusMonth}>+</StyledButton>
      </Banner>
    </>
  );
}

const Heading2 = styled.h2`
  margin: 0;
  padding: 0;
  font-size: 30px;
`;

const Heading3 = styled.h3`
  margin: 0;
  padding: 0;
  font-size: 26px;
`;
const Banner = styled.div`
  display: grid;
  width: 260px;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  justify-items: center;
`;
