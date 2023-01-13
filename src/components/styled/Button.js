import React from "react";
import styled from "styled-components";

export const Button = ({ content }) => {
  return <StyledButton>{content}</StyledButton>;
};

const StyledButton = styled.button`
  background: #1575a7;
  border-radius: 8px;
  margin-top: 30px;
  width: 400px;
  padding: 10px;
  color: #fff;
  border: none;
  cursor: pointer;
`;

