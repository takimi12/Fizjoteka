import FormWrap from "../../app/register/components/FormWrapper";
import Container from "../../app/register/components/Container";
import LoginForm from "./LoginForm";

const Login = async () => {

  return (
    <Container>
      <FormWrap>
        <LoginForm  />
      </FormWrap>
    </Container>
  );
};

export default Login;