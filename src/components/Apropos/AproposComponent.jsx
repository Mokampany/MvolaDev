import styled from "@emotion/styled";
import bg from "../../assets/images/background.png"

const rose = "#F069AB";
const Container = styled.div`
    background-image: url(${bg});
    background-size: cover;
    background-repeat: no-repeat;
    min-height: 100vh;
    color: white;
    display: grid;
    grid-template-columns: 55% 1% auto;
    align-items: center;
    @media (max-width:1100px){
        display: flex;
        flex-flow: column;
        padding: 100px 20px 0 20px;
    }
`
const Left = styled.div`
    display: flex;
    flex-flow: column;
    align-items: center;
    @media (max-width:1100px){
        margin-bottom: 50px;
    }
`
const H1 = styled.h1`
    display: flex;
    flex-flow: column;
    justify-content: center;
    font-weight: 800;
`
const Bar = styled.div`
    width: 75%;
    border: 1px solid ${rose};
`
const VerticalBar = styled.div`
`
const Right = styled.div`
`
const Text = styled.div`
    max-width: 30ch;
    text-align: start;
    line-height: 4ch;
    font-size: 20px;
    @media (max-width:600px){
        font-size: 15px;
    }
`
const Rose = styled.span`
    color: ${rose};
`
const AproposComponent = () => {
    return (
        <Container>
            <Left>
                <H1>
                    A propos
                </H1>
                <Bar></Bar>
            </Left>
            <VerticalBar></VerticalBar>
            <Right>
                <Text>
                    <Rose>Za Mandresy</Rose> est une entreprise basée à <Rose>Madagascar</Rose>, proposant
                    des services de <Rose>publicité</Rose> et de
                    <Rose> placement de produit</Rose> à ses clients.
                    Nous sommes actuellement présents sur la plateforme facebook,
                    rassemblant plus de <Rose>81 000 utilisateurs abonnés</Rose> sur
                    la page facebook principale <Rose><b>Za Mandresy</b></Rose>.
                </Text>
            </Right>
        </Container>
    );
}

export default AproposComponent;