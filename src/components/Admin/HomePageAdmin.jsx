import styled from "@emotion/styled";
import { Route, Routes } from "react-router-dom";
import CommandesEnAttente from "./CommandesEnAttente";
import bg from "../../assets/images/Backgrounds/background1.jpg";

const Container = styled.div`
  min-height: 100vh;
  padding-top: 100px;
  display: grid;
  grid-template-columns: 15% auto;
  padding-bottom: 50px;
  background-image: url(${bg});
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: left;
`;
const Left = styled.div`
  margin: -100px 0px 0px 0px;
  background-color: black;
  background-color: #1C1D1E;
  // border-radius: 10px;
  padding: 10px;
  padding-top: 100px;
  text-align: start;
  font-weight: 700;
  height: 200%;
  color: white;
`;
const Right = styled.div`
  background-color: white;
  padding: 10px;
  margin: -35px 0 0 0;
  height: 125%;
`;
const Li = styled.div`
  font-size: 14px;
  margin: 50px 0 50px 0;
  padding: 10px;
  &:hover {
    color: black;
    background-color: white;
    cursor: pointer;
    // border-radius: 20px;
  }
`;
const HomePageAdmin = () => {
  return (
    <Container>
      <Left>
        <Li>Tableau de bord</Li>
        <Li>Commandes</Li>
        <Li>Paiements</Li>
        <Li>Produits</Li>
      </Left>
      <Right>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <CommandesEnAttente />
              </>
            }
          />
          <Route
            path="/commandes"
            element={
              <>
                <span style={{ fontWeight: 700 }}>Liste des commandes</span>
              </>
            }
          />
          <Route
            path="/paiements"
            element={
              <>
                <span style={{ fontWeight: 700 }}>
                  Historique des paiements
                </span>
              </>
            }
          />
          <Route
            path="/produits"
            element={
              <>
                <span style={{ fontWeight: 700 }}>Liste de produits</span>
              </>
            }
          />
          <Route
            path="/*"
            element={
              <>
                <span style={{ fontWeight: 700 }}>404 Not found</span>
              </>
            }
          />
        </Routes>
      </Right>
    </Container>
  );
};

export default HomePageAdmin;
