import styled from "@emotion/styled";
import bg from "../assets/images/bg.png";
import Nav from "../components/Nav";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import videos from "../assets/videos/query.mp4";
import Iframe from "react-iframe";

const Container = styled.div`
  #home {
    margin: 30px 30px 0 30px;
    padding: 10px;
    min-height: 100vh;
    background-color: white;
    border-radius: 10px;
  }
`;
const Home = () => {
  /*let navigate = useNavigate();
  useEffect(() => {
    document.title = "Accueil";
    if (!localStorage.getItem("id")) {
      navigate("/Authentification");
    }
  });*/

  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
  };

  const items = [
    <div className="item" data-value="1">
      <Iframe url={videos} width="400px" height="300px" allow="fullscreen" />
    </div>,
    <div className="item" data-value="2">
      <Iframe url={videos} width="400px" height="300px" allow="fullscreen" />
    </div>,
    <div className="item" data-value="3">
      <Iframe url={videos} width="400px" height="300px" allow="fullscreen" />
    </div>,
    <div className="item" data-value="4">
      <Iframe url={videos} width="400px" height="300px" allow="fullscreen" />
    </div>,
    <div className="item" data-value="5">
      <Iframe url={videos} width="400px" height="300px" allow="fullscreen" />
    </div>,
  ];

  return (
    <>
      <Container>
        <Nav />
        <div id="home">
          Home page
          <AliceCarousel mouseTracking items={items} responsive={responsive} />
          <AliceCarousel
            mouseTracking
            items={items}
            responsive={responsive}
            controlsStrategy="alternate"
          />
          <AliceCarousel
            mouseTracking
            items={items}
            responsive={responsive}
            controlsStrategy="alternate"
          />
        </div>
      </Container>
    </>
  );
};

export default Home;
