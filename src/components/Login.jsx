import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from '../assets/images/Za_Mandresy_Logos/logo.jpg'

const width = '350px';

const Container = styled.div`
  display: flex;
  flex-flow: column;
  min-height: 100vh;
  align-items: center;
  padding-top: 50px;
`;
const Heading = styled.div`
  margin-top: 50px;
  margin-bottom: 20px;
`
const Logo = styled.img`
  width: 75px;
  border-radius: 50%;
  // height: 100%;
`
const HeadingText = styled.div`
`
const Form = styled.form`
  background-color: #F1F1F1;
  padding: 20px;
  border: 1px solid grey;
  border-radius: 10px;
  color: #414141;
  width: ${width};
`
const Email = styled.div`
  display: flex;
  flex-flow: column;
  align-items: start;
  margin-bottom: 30px;
`
const EmailLabel = styled.label`
  font-size: 14px;
`
const EmailInput = styled.input`
  width: 100%;
`
const Pass = styled.div`
  display: flex;
  flex-flow: column;
  align-items: start;
  margin-bottom: 10px;
`
const PassLabel = styled.label`
  font-size: 14px;
`
const PassInput = styled.input`
  width: 100%;
`
const ForgotPassword = styled.div`
  text-align: start;
  font-size: 12px;
  text-decoration: underline;
  &:hover{
    cursor: pointer;
    color: blue;
  }
  margin-bottom: 50px;
`
const SeConnecterButton = styled.div`
  border: 1px solid #F069AB;
  margin: auto;
  width: 75%;
  font-size: 13px;
  padding: 6px;
  user-select: none;
  color: white;
  background-color: #F069AB;
  &:hover{
    cursor: pointer;
    background-color: transparent;
    color: black;
  }
`
const CreateAccount = styled.div`
  width: ${width};
  background-color: #F1F1F1;
  border: 1px solid grey;
  border-radius: 10px;
  margin-top: 20px;
  padding: 20px;
  font-size: 14px;
`
const Star = styled.span`
  color: red;
`
const Login = () => {
  const [email, setEmail] = useState(null);
  const [mdp, setMdp] = useState(null);
  useEffect(() => {
    document.title = "Login | Za Mandresy"
  }, [])
  let navigate = useNavigate();
  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleChangeMdp = (e) => {
    setMdp(e.target.value);
  };
  const handleSubmitLogin = () => {
    alert("Fonctionnalité encore en phase de développement !")
  };
  return (
    <Container>
      <Heading>
        <Logo src={logo} alt="logo" />
        <HeadingText>Connectez-vous</HeadingText>
      </Heading>
      <Form>
        <Email>
          <EmailLabel>
            Email <Star>*</Star>
          </EmailLabel>
          <EmailInput />
        </Email>
        <Pass>
          <PassLabel>
            Mot de passe <Star>*</Star>
          </PassLabel>
          <PassInput />
        </Pass>
        <ForgotPassword>Mot de passe oublié ?</ForgotPassword>
        <SeConnecterButton onClick={handleSubmitLogin}>Se connecter</SeConnecterButton>
      </Form>
      <CreateAccount>Vous êtes nouveau ? <Link to="/authentification/inscription">Créez un compte</Link></CreateAccount>
    </Container>
  );
};

export default Login;
