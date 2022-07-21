import styled from "@emotion/styled";
import ChoixTypeDePaiement from "../../components/Commander/ChoixTypeDePaiment";
import ChoixTarif from "../../components/Commander/ChoixTarif";
import { useRef } from "react";
import { Route, Routes } from "react-router-dom";
import Formulaire from "../../components/Commander/Formulaire";
const bgColor = "#0E102E";

const Container = styled.div`
    min-height: 100vh;
    background-color: ${bgColor};
    scroll-behavior: smooth;
`
const ChoixCommande = () => {
    return (
        <Container>
            <Routes>
                <Route index element={<ChoixTarif />} />
                <Route path="/choixPaiement" element={<ChoixTypeDePaiement />} />
                <Route path="/formulaire" element={<Formulaire />} />
            </Routes>
        </Container>
    );
}

export default ChoixCommande;