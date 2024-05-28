import FormWrap from "../../components/FormWrap/FormWrap";
import Container from "../../components/Container/Container";
import LoginForm from "./LoginForm";

const Login = async () => {

  return (
    <Container>
      <FormWrap>
        <LoginForm   />
      </FormWrap>
    </Container>
  );
};

export default Login;