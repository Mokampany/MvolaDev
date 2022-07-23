import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import bg from "../assets/images/Backgrounds/background1.jpg";
import logo from "../assets/images/Za_Mandresy_Logos/logo.jpg";
const width = "350px";

const Container = styled.div`
  display: flex;
  flex-flow: column;
  min-height: 100vh;
  align-items: center;
  padding-top: 50px;

  // color: ${rose};
  color: white;
  padding-top: 150px;
  padding-bottom: 100px;
  min-height: 100vh;
  background-image: url(${bg});
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: left;
  @media (max-width: 1100px) {
    padding-top: 100px;
    display: flex;
    flex-flow: column wrap;
    align-items: center;
    background-size: auto;
  }
`;
const Heading = styled.div`
  margin-top: 50px;
  margin-bottom: 20px;
`;
const Logo = styled.img`
  width: 75px;
  border-radius: 50%;
  // height: 100%;
`;
const HeadingText = styled.div``;
const Form = styled.form`
  background-color: #f1f1f1;
  padding: 20px;
  border: 1px solid grey;
  border-radius: 10px;
  color: #414141;
  width: ${width};
`;
const Email = styled.div`
  display: flex;
  flex-flow: column;
  align-items: start;
  margin-bottom: 30px;
`;
const EmailLabel = styled.label`
  font-size: 14px;
`;
const EmailInput = styled.input`
  width: 100%;
`;
const Pass = styled.div`
  display: flex;
  flex-flow: column;
  align-items: start;
  margin-bottom: 10px;
`;
const PassLabel = styled.label`
  font-size: 14px;
`;
const PassInput = styled.input`
  width: 100%;
`;
const ForgotPassword = styled.div`
  text-align: start;
  font-size: 12px;
  text-decoration: underline;
  &:hover {
    cursor: pointer;
    color: blue;
  }
  margin-bottom: 50px;
`;
const SeConnecterButton = styled.div`
  border: 1px solid #f069ab;
  margin: auto;
  width: 75%;
  font-size: 13px;
  padding: 6px;
  user-select: none;
  color: white;
  background-color: #f069ab;
  &:hover {
    cursor: pointer;
    background-color: transparent;
    color: black;
  }
`;
const CreateAccount = styled.div`
  width: ${width};
  background-color: #f1f1f1;
  border: 1px solid grey;
  border-radius: 10px;
  margin-top: 20px;
  padding: 20px;
  font-size: 14px;
`;
const Star = styled.span`
  color: red;
`;
const Login = () => {
  const [email, setEmail] = useState(null);
  const [mdp, setMdp] = useState(null);
  useEffect(() => {
    document.title = "Login | Za Mandresy";
  }, []);
  let navigate = useNavigate();
  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleChangeMdp = (e) => {
    setMdp(e.target.value);
  };
  const [error, setError] = useState(null);
  const handleSubmitLogin = () => {
    const url = `${process.env.REACT_APP_NODE_URL}/api/v1/utilisateur/login`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        motDePasse: mdp,
      }),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (!data.error) {
          setError(null);
          const id = data._id;
          console.log(id);
          localStorage.setItem("idUser", id);
          window.location = "/homeUser";
        } else {
          setError("error");
          alert("Invalid credentials");
        }
      });
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
          <EmailInput onChange={handleChangeEmail} />
        </Email>
        <Pass>
          <PassLabel>
            Mot de passe <Star>*</Star>
          </PassLabel>
          <PassInput type={`password`} onChange={handleChangeMdp} />
        </Pass>
        <ForgotPassword>Mot de passe oublié ?</ForgotPassword>
        <SeConnecterButton onClick={handleSubmitLogin}>
          Se connecter
        </SeConnecterButton>
      </Form>
      <CreateAccount>
        Vous êtes nouveau ?{" "}
        <Link to="/authentification/inscription">Créez un compte</Link>
      </CreateAccount>
    </Container>
  );
};

export default Login;
