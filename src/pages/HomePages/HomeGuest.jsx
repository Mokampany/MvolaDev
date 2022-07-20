import styled from "@emotion/styled";
import { useEffect } from "react";
import "react-alice-carousel/lib/alice-carousel.css";
import { useNavigate } from "react-router-dom";
import useTestAuth from "../../services/useTestAuth";
import bg from "../../assets/images/Backgrounds/background1.jpg"
import illustration from "../../assets/images/Illustrations/cartoon.png";
import { useRef } from "react";
const rose = "#fd3395";

const Rose = styled.span`
  // color: ${rose};
`

const Container = styled.div`
  // color: ${rose};
  color: white;
  padding-top: 150px;
  padding-bottom: 100px;
  display: grid;
  grid-template-columns: 60% auto;
  min-height: 100vh;
  background-image: url(${bg});
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: left;
  @media (max-width: 1100px){
    padding-top: 100px;
    display: flex;
    flex-flow: column wrap;
    align-items: center;
    background-size: auto;
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
  font-size: 20px;
  max-width: 40ch;
  color: #C6C6C6;
  // font-weight: 700;
`
const Buttons = styled.div`
  display: flex;
  margin-bottom:10px;
  flex-flow: row wrap;
  justify-content: start;
  user-select: none;
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
  color: white;
  border: 1px solid ${rose};
  padding: 10px;
  text-align: center;
  font-size: 14px;
  transition: background-color .2s;
  width: 250px;
  margin-bottom: 10px;
  &:hover{
    cursor: pointer;
    background-color: white;
    color: ${rose};
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
const Gif = styled.img`
  width: 100%;
`
const Loading = styled.div`
  position: fixed;
  min-height: 100vh;
  inset: 0;
  background-color: black;
  transition: transform .3s;
  color: white;
`
const Home = () => {
  const { idUser, isLoading } = useTestAuth()
  const navigate = useNavigate()
  const loadingRef = useRef();
  useEffect(() => {
    document.title = "Za Mandresy | Accueil"
    localStorage.setItem("id", "2")
    // setTimeout(()=>{
    //   loadingRef.current.style.transform = "translate(-100%)";
    // },2000)
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
      {/* <Loading ref={loadingRef}>
        Loading...
      </Loading> */}
      <Container>
        <Left>
          <H1>Confiez-nous vos publicités<Transparent></Transparent></H1>
          <Bar></Bar>
          <Description>Laissez vos <Rose>publicités</Rose> et <Rose>placements de produits</Rose> entre de bonnes mains.</Description>
          <Buttons>
            <CommencerButton onClick={handleCommencer}>Commencer</CommencerButton>
            <AProposDeNousButton onClick={handleAPropos}>A propos de nous</AProposDeNousButton>
          </Buttons>
          <Licence>
            Licences et règles d'utilisations.
          </Licence>
          {/* <a href='https://www.freepik.com/photos/color-overlay'>Color overlay photo created by user3802032 - www.freepik.com</a> */}
        </Left>
        <Right>
          <Gif src={illustration}></Gif>
        </Right>
      </Container>
    </>
  );
};

export default Home;
