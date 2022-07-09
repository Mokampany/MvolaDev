import styled from "@emotion/styled";
import Nav from "../components/Nav";
import { useEffect } from "react";
import "react-alice-carousel/lib/alice-carousel.css";
import { useNavigate } from "react-router-dom";
import useTestAuth from "../services/useTestAuth";
import illustation from "../assets/images/illustration_accueil.png"
const Container = styled.div`
  #home {
    min-height: 100vh;
    color: white;
  }
  .rose{
    color: #F069AB;
  }
  .grey{
    color: #C6C6C6;
  }
  //Mobile VIEW
  @media screen and (min-width: 50px){
    #home{
      display: flex;
      align-items: center;
      text-align: start;
      padding: 50px;
      justify-content: center;
    }
    h1{
      font-size: 40px;
      font-weight: 800;
    }
    .bar{
      width: 90%;
      border-top: 1px solid #F069AB;
      margin: 30px 0 30px 0;
    }
    .mediumText{
      color: #C6C6C6;
      margin-bottom: 30px;
    }
    .commencer{
      padding: 15px;
      border-radius: 0px;
      border: 2px solid #F069AB;
      color: white;
      margin-bottom: 30px;
      transition: background-color .3s;
    }
    .commencer:hover{
      background-color: #F069AB;
    }
    .sectionDivertissement{
      color: #F069AB;
      margin-bottom: 30px;
    }
    .right img{
      width:100%;
      height: 100%;
    }
  }

  //Desktop VIEW
  @media screen and (min-width:1100px){
    #home{
      display: flex;
      align-items: center;
    }
    #home .conteneur{
      // background-color: blue;
      display: grid;
      grid-template-columns: 45% auto;
      padding: 50px;
    }
    .conteneur .left{
      display: inline-block;
      justify-content: center;
      padding-left: 10px;
    }
    .conteneur .right{
      width: 100%;
      display: flex;
      justify-content: end;
      align-items: center;
    }
    h1{
      font-size: 4em;
    }
  }
  //MOBILE VIEW BELOW 500px
  @media screen and (max-width:500px){
  }
`;
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
      navigate("/authentification")
    }
  }
  return (
    <>
      <Container>
        {/* <Nav /> */}
        <section id="home">
          <div className="conteneur">
            <div className="left">
              <div className="bigText">
                <h1>Confiez-nous vos <span className="rose">publicités</span></h1>
              </div>
              <div className="bar"></div>
              <div className="mediumText">
                Laissez vos <span className="rose">publicités</span> et <span className="rose">placements de produit </span>
                entre de bonnes mains.
              </div>
              <div className="btn commencer">
                Commencer maintenant
              </div>
              <div className="sectionDivertissement">
                Section divertissement
              </div>
            </div>
            <div className="right">
              <img src={illustation} alt="" />
            </div>
          </div>
        </section>
      </Container>
    </>
  );
};

export default Home;
