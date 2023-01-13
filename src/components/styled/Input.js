import styled from "styled-components";

const Input = ({ type, placeholder }) => {
  return (
    <div>
      <StyledInput type={type} placeholder={placeholder}></StyledInput>
    </div>
  );
};

const StyledInput = styled.input`
  border: 1px solid black;
  border-radius: 8px;
  padding: 5px;
  width: 600px;
  padding: 10px;
  margin: 10px;
  font-size: 16px;
  outline: none;
  &:focus {
    display: inline-block;
    box-shadow: 0 0 0 2px skyblue;
  }
`;

export default Input;
