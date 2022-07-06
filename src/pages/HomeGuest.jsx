import styled from "@emotion/styled";
import Nav from "../components/Nav";
import { useEffect } from "react";
import "react-alice-carousel/lib/alice-carousel.css";
import { useNavigate } from "react-router-dom";
import useTestAuth from "../services/useTestAuth";
const Container = styled.div`
  #home {
    margin: 30px 30px 0 30px;
    padding: 10px;
    min-height: 100vh;
    background-color: #282c34;
    border-radius: 10px;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .za-mandresy{
    font-weight: bolder;
    font-size: 7em;
    color: #F069AB;
  }
  .description{
    font-size: 1.2em;
  }
  .bar{
    border-top: 2px solid #F069AB;
    width: 30em;
  }
  .commencer{
    cursor: pointer;
    padding: 20px;
    background-color: #F069AB;
    border-radius: 50px;
    font-size: 1em;
    font-weight: bolder;
    user-select: none;
  }
  //MOBILE VIEW BELOW 850px
  @media screen and (max-width:850px){
    .za-mandresy{
      font-size: 4.5em;
    }
    .bar{
      width: 12em;
    }
  }
  //MOBILE VIEW BELOW 500px
  @media screen and (max-width:500px){
    .za-mandresy{
      font-size: 2em;
    }
    .bar{
      width: 12em;
    }
  }
`;
const Home = () => {
  const { idUser, isLoading } = useTestAuth()
  const navigate = useNavigate()
  useEffect(() => {
    document.title = "Za Mandresy | Accueil"
  }, [])

  useEffect(()=>{
    if(idUser){
      navigate("/homeUser")
    }
  },[idUser,isLoading,navigate])

  const handleCommencer = () => {
    if (idUser && isLoading === false) {
      navigate("/")
    } else {
      navigate("/authentification")
    }
  }
  return (
    <>
      <Container>
        {/* <Nav /> */}
        <div id="home">
          <h1 className="za-mandresy">ZA MANDRESY</h1>
          <div className="bar"></div>
          <br />
          <div className="description">
            Mettez vos publicités et placements de produit entre de bonnes mains.
          </div>
          <br />
          <div onClick={handleCommencer} className="commencer">
            Commencez maintenant
          </div>
        </div>
      </Container>
    </>
  );
};

export default Home;
