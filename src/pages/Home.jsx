import styled from "@emotion/styled";
import bg from "../assets/images/bg.png";
import Nav from "../components/Nav";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Container = styled.div`
  #home {
    padding: 10px;
    min-height: 100vh;
    background-color: white;
  }
`;
const Home = () => {
  let navigate = useNavigate();
  useEffect(() => {
    document.title = "Accueil";
    if (!localStorage.getItem("id")) {
      navigate("/Authentification");
    }
  }, []);
  return (
    <>
      <Container>
        <Nav />
        <div id="home">Home page</div>
      </Container>
    </>
  );
};

export default Home;
