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
    background-color: #282c34;
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
        850: { items: 2 },
        1024: { items: 3 },
    };

    const items = [
        <div className="item" data-value="1">
            <video style={{pointerEvents: "none"}} height="400" width="300" controls>
                <source src={videos} type="video/mp4" />
            </video>
        </div>,
    ];

    return (
        <>
            <Container>
                <Nav />
                <div id="home">
                    <AliceCarousel
                        mouseTracking
                        items={items}
                        responsive={responsive}
                        infinite
                        animationType="fadeout"
                        renderPrevButton={() => {
                            return <p style={{textAlign:"center"}} className="p-4 absolute left-0 top-0">Previous Item</p>
                        }}
                        renderNextButton={() => {
                            return <p style={{textAlign:"center"}} className="p-4 absolute right-0 top-0">Next Item</p>
                        }}
                        renderPlayPauseButton={() => {
                            return <p style={{textAlign:"center"}} className="p-4 absolute right-0 top-0">PlayPause</p>
                        }}
                    />
                    <AliceCarousel
                        mouseTracking
                        items={items}
                        responsive={responsive}
                        infinite
                    // controlsStrategy="alternate"
                    />
                    <AliceCarousel
                        mouseTracking
                        items={items}
                        responsive={responsive}
                        controlsStrategy="alternate"
                        infinite
                    />
                </div>
            </Container>
        </>
    );
};

export default Home;
