import styled from "@emotion/styled";
import {
    Route,
    Routes,
} from "react-router-dom";
import CommandesEnAttente from "./CommandesEnAttente";

const Container = styled.div`
    min-height: 100vh;
    padding-top: 100px;
    display: grid;
    grid-template-columns: 15% auto;
    // background-color: #1C1D1E;
    padding-bottom: 50px;
`
const Left = styled.div`
    // margin: 20px 20px 0 20px;
    background-color : rgba(0, 38, 255, 0.7);
    // border-radius: 10px;
    padding: 10px;
    text-align: start;
    font-weight: 700;
    height: 100%;
    color: white;
`
const Right = styled.div`
    margin: 0px 20px 0 20px;
    background-color: white;
    border-radius: 20px;
    padding: 10px;
`
const Li = styled.div`
    font-size : 14px;
    margin: 50px 0 50px 0;
    padding: 10px;
    &:hover{
        color: black;
        background-color: white;
        cursor: pointer;
        // border-radius: 20px;
    }
`
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
                    <Route path="/" element={
                        <>
                            <CommandesEnAttente />
                        </>} />
                    <Route path="/commandes" element={
                        <>
                            <span style={{ fontWeight: 700 }}>Liste des commandes</span>
                        </>} />
                    <Route path="/paiements" element={
                        <>
                            <span style={{ fontWeight: 700 }}>Historique des paiements</span>
                        </>} />
                    <Route path="/produits" element={
                        <>
                            <span style={{ fontWeight: 700 }}>Liste de produits</span>
                        </>} />
                    <Route path="/*" element={
                        <>
                            <span style={{ fontWeight: 700 }}>404 Not found</span>
                        </>} />
                </Routes>
            </Right>
        </Container>
    );
}

export default HomePageAdmin;