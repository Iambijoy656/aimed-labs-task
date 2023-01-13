import styled from "styled-components";

const Lavel = styled.label`
  padding: 10px;
`;

const Input = styled.input`
  &:checked + label ${Lavel} {
    background: green;
    padding: 10px;
  }
`;

const Remember = () => {
  return (
    <div>
      <Input id="input" type="checkbox"></Input>
      <Lavel for="input">Remember me</Lavel>
    </div>
  );
};

export default Remember;
