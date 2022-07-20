import styled from "@emotion/styled";
import logoMvola from "../../assets/images/Logo_mvola/logoMvola.png";
import Progression from "../../components/Commander/Progression";
const rose = "#F069AB";
const yellow = "yellow";

const Container = styled.div`
    display: flex;
    flex-flow: column;
    padding:100px 0 100px 0;
    color: white;
    min-height: 100vh;
    align-items: center;
`
const H1 = styled.h1`
    font-size: 30px;
    font-weight: 500;
    user-select: none;
    margin-bottom: 20px;
    display: flex;
    flex-flow: column;
    align-items: center;
    &:after{
        content:"";
        width: 80%;
        border-top: 1px solid ${rose};
        margin: 20px 0 20px 0;
    }
`
const ListePaiement = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
`
const Paiement = styled.div`
    width: 275px;
    text-align: start;
`
const ImagePaiement = styled.img`
    width: 275px;
`
const DetailsPaiement = styled.div`
    min-height: 200px;
    background-color: white;
    color: black;
    padding: 20px;
`
const TitrePaiement = styled.h2`
    font-size: 25px;
`
const DescriptionPaiement = styled.div`
    min-height: 100px;
`
const BouttonChoisir = styled.div`
    text-align: center;
    color: green;
    font-weight: 800;
    border: 1px solid ${yellow};
    padding: 10px;
    background-color: ${yellow};
    transition: background-color .3s;
    &:hover{
        cursor: pointer;
        background-color: transparent;
    }
`
const ChoixTypeDePaiement = () => {
    return (
        <Container>
            <Progression numero={2} />
            <H1>Choix de paiement</H1>
            <ListePaiement>
                <Paiement>
                    <ImagePaiement src={logoMvola} alt="Logo mvola" />
                    <DetailsPaiement>
                        <TitrePaiement>
                            Mvola
                        </TitrePaiement>
                        <DescriptionPaiement>
                            Payer via Mvola
                        </DescriptionPaiement>
                        <BouttonChoisir>
                            Choisir
                        </BouttonChoisir>
                    </DetailsPaiement>
                </Paiement>
            </ListePaiement>
        </Container>
    );
}

export default ChoixTypeDePaiement;