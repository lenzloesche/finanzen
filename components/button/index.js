import styled from "styled-components";

const StyledButton = styled.button`
  color: #212752;
  background-color: ${(props) => (props.color ? props.color : "#c0d313")};
  border: 1px solid #212752;
  border-radius: 5px;
  font-size: 18px;
  padding: 4px;
  margin: 2px;
`;
export default StyledButton;
