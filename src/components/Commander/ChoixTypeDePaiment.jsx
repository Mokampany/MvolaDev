import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import logoMvola from "../../assets/images/Logo_mvola/logoMvola.png";
import Progression from "./Progression";
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
    font-size: 25px;
    font-weight: 800;
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
    user-select: none;
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
    const [typeDePaiement, setTypeDePaiement] = useState(null);
    const navigate = useNavigate();
    const handleSubmit = (type) => {
        const tarifId = window?.MyLib?.choixTarif;
        if(tarifId===null || tarifId === undefined || tarifId < 0){
            alert("Choisissez un type de tarif");
            navigate("/commander")
            return
        }
        try{
            setTypeDePaiement(type);
            window.MyLib.choixPaiement = type;
            navigate("/commander/formulaire");    
        }catch(err){

        }
    }
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
                        <BouttonChoisir onClick={()=>{handleSubmit("mvola")}}>
                            Choisir
                        </BouttonChoisir>
                    </DetailsPaiement>
                </Paiement>
            </ListePaiement>
        </Container>
    );
}

export default ChoixTypeDePaiement;