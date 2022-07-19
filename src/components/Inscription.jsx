import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from '../assets/images/Za_Mandresy_Logos/logo.jpg';

const grey = "#F1F1F1";

const Star = styled.span`
  color: red;
  font-size: 16px;
`

const width = '350px';
const FORM_GROUP = `
  display: flex;
  flex-flow: column;
  align-items: start;
  font-size: 14px;
`
const MARGIN_BOTTOM = "10px";

const Container = styled.div`
  display: flex;
  flex-flow: column;
  min-height: 100vh;
  align-items: center;
  padding-top: 60px;
`;
const Heading = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
`
const Logo = styled.img`
  width: 75px;
  border-radius: 50%;
`
const HeadingText = styled.div`
`
const Form = styled.form`
  background-color: ${grey};
  padding: 20px;
  border: 1px solid grey;
  border-radius: 10px;
  color: #414141;
  width: ${width};
`
const Nom = styled.div`
  ${FORM_GROUP}
  margin-bottom: ${MARGIN_BOTTOM};
`
const NomLabel = styled.label`
`
const NomInput = styled.input`
  width: 100%;
`
const Prenom = styled.div`
  ${FORM_GROUP}
  margin-bottom: ${MARGIN_BOTTOM};
`
const PrenomLabel = styled.label`
`
const PrenomInput = styled.input`
  width: 100%;
`

const Email = styled.div`
  ${FORM_GROUP};
  margin-bottom: ${MARGIN_BOTTOM};
`
const EmailLabel = styled.label`
`
const EmailInput = styled.input`
  width: 100%;
`
const Pass = styled.div`
  ${FORM_GROUP};
  margin-bottom: ${MARGIN_BOTTOM};
`
const PassLabel = styled.label`
`
const PassInput = styled.input`
  width: 100%;
`
const ConfirmPass = styled.div`
  ${FORM_GROUP};
  margin-bottom:${MARGIN_BOTTOM};
`
const ConfirmPassLabel = styled.label`
`
const ConfirmPassInput = styled.input`
  width: 100%;
`
const Policies = styled.div`
  display: flex;
  align-items: start;
`
const AcceptPolicies = styled.input`
`
const LabelAcceptPolicies = styled.label`
  text-align: start;
  margin-left : 10px;
  font-size: 12px;
`
const InscriptionButton = styled.div`
  border: 1px solid #F069AB;
  margin: auto;
  margin-top: 50px;
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
const ConnectToAccount = styled.div`
  margin-top: 20px;
  font-size: 14px;
`
const Inscription = () => {
  const [prenom, setPrenom] = useState(null);
  const [nom, setNom] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);
  useEffect(() => {
    document.title = "Inscription | Za Mandresy"
  }, [])

  const handleChangePrenom = (e) => {
    setPrenom(e.target.value);
  };
  const handleChangeNom = (e) => {
    setNom(e.target.value);
  };
  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleChangeConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
    console.log(confirmPassword)
  };
  const handleInscription = async () => {
    alert("Fonctionnalité encore en phase de développement !")
    window.location("/authentification")
  };

  return (
    <Container>
      <Heading>
        <Logo src={logo} alt="logo" />
        <HeadingText>Inscription</HeadingText>
      </Heading>
      <Form>
        <Nom>
          <NomLabel>
            Nom <Star>*</Star>
          </NomLabel>
          <NomInput />
        </Nom>
        <Prenom>
          <PrenomLabel>
            Prenom <Star>*</Star>
          </PrenomLabel>
          <PrenomInput />
        </Prenom>
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
        <ConfirmPass>
          <ConfirmPassLabel>
            Confirmer le mot de passe <Star>*</Star>
          </ConfirmPassLabel>
          <ConfirmPassInput />
        </ConfirmPass>
        <Policies>
          <AcceptPolicies type="checkbox"></AcceptPolicies>
          <LabelAcceptPolicies>En vous inscrivant, vous acceptez tous nos règles d'utilisations. <Star>*</Star></LabelAcceptPolicies>
        </Policies>
        <InscriptionButton onClick={handleInscription}>Inscription</InscriptionButton>
        <ConnectToAccount>Vous avez déjà un compte ? <Link to="/authentification">Connectez-vous</Link></ConnectToAccount>
      </Form>
    </Container>
  );
};

export default Inscription;
