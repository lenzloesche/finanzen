import styled from "styled-components";
import StyledButton from "../button";

export default function StyledCalendar({
  handleMinusYear,
  handlePlusYear,
  handleMinusMonth,
  handlePlusMonth,
  currentYear,
  currentMonth,
}) {
  return (
    <>
      <StyledBanner>
        <StyledButton onClick={handleMinusYear}>-</StyledButton>{" "}
        <StyledHeading2>{currentYear}</StyledHeading2>{" "}
        <StyledButton onClick={handlePlusYear}>+</StyledButton>
      </StyledBanner>
      <StyledBanner>
        <StyledButton onClick={handleMinusMonth}>-</StyledButton>{" "}
        <StyledHeading3>{currentMonth}</StyledHeading3>{" "}
        <StyledButton onClick={handlePlusMonth}>+</StyledButton>
      </StyledBanner>
    </>
  );
}

const StyledHeading2 = styled.h2`
  margin: 0;
  padding: 0;
  font-size: 30px;
`;

const StyledHeading3 = styled.h3`
  margin: 0;
  padding: 0;
  font-size: 26px;
`;
const StyledBanner = styled.div`
  display: grid;
  width: 300px;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  justify-items: center;
`;
