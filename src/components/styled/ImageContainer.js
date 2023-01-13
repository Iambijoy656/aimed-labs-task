import styled from "styled-components";
import img from "../../assets/loginImg.png";

const ImageContainer = () => {
  return (
    <StyledImageContainer>
      <img src={img} alt="" />
    </StyledImageContainer>
  );
};

const StyledImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 90vw;
  justify-content: center;

  img {
    width: 50%;
    height: 50%;
`;

export default ImageContainer;
