import styled from "@emotion/styled";

const Container = styled.div`
    width: 90%;
    display: flex;
    justify-content: space-around;
`
const Step = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid;
    padding: 10px;
`
const Progression = ({numero}) => {
    return ( 
        <Container>
            {/* <Step>Choix de tarif</Step>
            <Step>Type de paiement</Step>
            <Step>Formulaire</Step> */}
        </Container>
     );
}
 
export default Progression;