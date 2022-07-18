import styled from "@emotion/styled";
import Nav from "../components/Nav";
import { useEffect } from "react";
import "react-alice-carousel/lib/alice-carousel.css";
import { useNavigate } from "react-router-dom";
import useTestAuth from "../services/useTestAuth";
import illustation from "../assets/images/illustration_accueil.png"
import bg from "../assets/images/background.png"
const rose = "#fd3395";

const Rose = styled.span`
  color: ${rose};
`

const Container = styled.div`
  padding-top: 100px;
  padding-bottom: 100px;
  display: grid;
  grid-template-columns: 55% auto;
  min-height: 100vh;
  background-image: url(${bg});
  background-size: cover;
  background-repeat: no-repeat;
  @media (max-width: 1100px){
    display: flex;
    flex-flow: column wrap;
    align-items: center;
  }
`;
const Left = styled.div`
  text-align: start;
  padding: 0 50px 0 50px;
  display: flex;
  flex-flow: column;
  justify-content: center;
  @media (max-width: 1100px){
    // padding: 0px;
  }
`
const H1 = styled.h1`
  font-weight: 800;
  font-size: 64px;
  color: white;
  @media (max-width: 1100px){
    font-size: 40px;
  }
`
const Transparent = styled.span`
  -webkit-text-stroke: 2px ${rose}; 
  font-family: sans-serif;
  color: transparent;
`
const Bar = styled.div`
  border-top: 2px solid ${rose};
  margin: 30px 0 30px 0;
  width: 75%;
`
const Description = styled.div`
  margin-bottom: 50px;
  font-weight: 500;
  color: #C6C6C6;
`
const Buttons = styled.div`
  display: flex;
  margin-bottom:10px;
  flex-flow: row wrap;
  justify-content: start;
`
const CommencerButton = styled.div`
  background-color: ${rose};
  border-radius: 0px;
  color : white;
  width: 200px;
  padding: 10px;
  text-align: center;
  transition: background-color .2s;
  font-size: 14px;
  margin-right: 10px;
  margin-bottom: 10px;
  &:hover{
    cursor: pointer;
    background-color: transparent;
    color: ${rose};
    border: 1px solid ${rose};
  }
  @media (max-width: 1100px){
    width: 100%;
    margin-right: 0px;
  }
`
const AProposDeNousButton = styled.div`
  color: ${rose};
  border: 1px solid ${rose};
  padding: 10px;
  text-align: center;
  font-size: 14px;
  transition: background-color .2s;
  width: 250px;
  margin-bottom: 10px;
  &:hover{
    cursor: pointer;
    // background-color: ${rose};
    // color: white;
  }
  @media (max-width: 1100px){
    width: 100%;
  }
`
const Licence = styled.div`
  font-size: 12px;
  color: blue;
  &:hover{
    text-decoration: underline;
    cursor: pointer;
  }
  display: none;
`
const Right = styled.div`
  padding: 0 30px 0 0px;
  display: flex;
  align-items: center;
  justify-content: center;
`
const Illustration = styled.img`
  margin-top: -30px;
  // width: 100%;
  max-width:100%;
  max-height:100%;
  @media (max-width: 1100px){
    height: 50%;
    width: 50%;
    margin-top: 50px;
  }
`
const Home = () => {
  const { idUser, isLoading } = useTestAuth()
  const navigate = useNavigate()
  useEffect(() => {
    document.title = "Za Mandresy | Accueil"
  }, [])

  useEffect(() => {
    if (idUser) {
      navigate("/homeUser")
    }
  }, [idUser, isLoading, navigate])

  const handleCommencer = () => {
    if (idUser && isLoading === false) {
      navigate("/")
    } else {
      navigate("/authentification");
    }
  }
  const handleAPropos = () => {
    navigate("/apropos");
  }
  return (
    <>
      <Container>
        <Left>
          <H1>Confiez-nous vos <Transparent>publicités</Transparent></H1>
          <Bar></Bar>
          <Description>Laissez vos <Rose>publicités</Rose> et <Rose>placements de produits</Rose> entre de bonnes mains.</Description>
          <Buttons>
            <CommencerButton onClick={handleCommencer}>Commencer</CommencerButton>
            <AProposDeNousButton onClick={handleAPropos}>A propos de nous</AProposDeNousButton>
          </Buttons>
          <Licence>
            Licences et règles d'utilisations.
          </Licence>
        </Left>
        <Right>
          <Illustration src={illustation} alt="" />
        </Right>
      </Container>
    </>
  );
};

export default Home;
