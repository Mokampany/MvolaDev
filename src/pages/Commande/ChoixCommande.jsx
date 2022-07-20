import styled from "@emotion/styled";
import { Route, Routes } from "react-router-dom";
import TarifComponent from "../../components/Apropos/TarifComponent";
import Progression from "../../components/Commander/Progression";
import ChoixTypeDePaiement from "./ChoixTypeDePaiment";
const bgColor = "#0E102E";

const Container = styled.div`
    min-height: 100vh;
    background-color: ${bgColor};
`
const ChoixCommande = () => {
    return ( 
        <Container>
            <Routes>
                <Route index element={<>
                    <TarifComponent />
                </>} />
                <Route path=":id" element={<ChoixTypeDePaiement />}/>
            </Routes>
        </Container>
     );
}
 
export default ChoixCommande;