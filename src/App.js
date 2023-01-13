import "./App.css";
import MainContainer from "./components/styled/MainContainer";
import LoginContainer from "./components/styled/LoginContainer";
import ImageContainer from "./components/styled/ImageContainer";
import { LoginText } from "./components/styled/LoginText";
import { InputContainer } from "./components/styled/InputContainer";
import Input from "./components/styled/Input";
import { ButtonContainer } from "./components/styled/ButtonContainer";
import { Button } from "./components/styled/Button";
import { FooterComponent } from "./components/styled/FooterComponent";
import Remember from "./components/styled/Remember";

function App() {
  return (
    <MainContainer>
      <ImageContainer></ImageContainer>

      <LoginContainer>
        <LoginText>Login</LoginText>
        <InputContainer>
          <Input type="email" placeholder="Email" />
          <Input type="password" placeholder="password" />
        </InputContainer>

        <FooterComponent>
          <Remember type="checkbox" name="Remember me"></Remember>
        </FooterComponent>

        <ButtonContainer>
          <Button content="Login"></Button>
        </ButtonContainer>
      </LoginContainer>
    </MainContainer>
  );
}

export default App;
