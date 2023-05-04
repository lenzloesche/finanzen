const { default: styled } = require("styled-components");

const StyledInput = styled.input`
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  -moz-appearance: textfield;
  margin: 0;
  width: 100%;
`;
export default StyledInput;
