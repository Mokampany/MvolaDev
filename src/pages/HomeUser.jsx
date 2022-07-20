import styled from "@emotion/styled";
import { useEffect } from "react";
import "react-alice-carousel/lib/alice-carousel.css";
import { useNavigate } from "react-router-dom";
import useTestAuth from "../services/useTestAuth";
import img from "../assets/images/Za_Mandresy_Logos/logo.jpg"
import illustration from "../assets/images/Illustrations/cartoon.png"
const bgColor = "#0E102E";
const rose = "#F069AB";
const grey = "#2E2E2E";

const Container = styled.div`
    min-height: 100vh;
    background-color: ${bgColor};
    color: white;
    padding: 100px 50px 0 50px;
    display: flex;
    flex-flow: column;
    // justify-content: center;
    align-items: center;
`;
const H1 = styled.h1`
    font-size: 20px;
    font-weight: 800;
    user-select: none;
    margin-bottom: 20px;
    text-align: start;
`
const List = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: start;
    @media (max-width: 1100px){
        justify-content: center;
        padding: 0px;
    }
    // background-color: #C6C6C6;
    border-radius: 10px;
    padding-top: 20px;
`
const CardNouvelleCommande = styled.div`
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
    width: 300px;
    height: 250px;
    border: 1px solid white;
    margin-right: 20px;
    margin-bottom: 20px;
    color: blue;
    font-weight: 800;
    border-radius: 10px;
    background-color: white;
    &:hover{
        cursor: pointer;
        background-color: #C6C6C6;
    }
    user-select: none;
`
const AjouterText =styled.p`
    max-width: 15ch;
`

const Card = styled.div`
    width: 300px;
    text-align: start;
    margin-right: 20px;
    margin-bottom: 20px;
`
const CardDetails = styled.div`
    border-radius: 10px;
    border: 1px solid white;
    padding: 20px;
    background-color: white;
    color: black;
    height: 250px;
    // position: relative;
    user-select: none;
`
const CardTitle = styled.h2`
    font-weight: 800;
    font-size: 25px;
    margin-bottom: 10px;
    min-height: 75px;
`
const CardDescription = styled.div`
    color: ${grey};
    font-size: 12px;
    height: calc(2*6ch);
    max-width: 35ch;
`
const CommencerButton = styled.div`
    font-weight:500;
    padding: 10px;
    border: 1px solid ${rose};
    color: white;
    background-color: ${rose};
    transition: background-color .3s;
    text-align: center;
    width: 100%;
    font-size: 12px;
    &:hover{
        cursor: pointer;
        background-color: transparent;
        color: ${rose};
    }
`
const DetailsButton = styled.div`
    font-weight:800;
    padding: 10px;
    border: 1px solid ${rose};
    color: ${rose};
    background-color: transparent;
    transition: background-color .3s;
    text-align: center;
    width: 100px;
    font-size: 12px;
    &:hover{
        cursor: pointer;
        background-color: ${rose};
        color: white;
    }
`
const HomeUser = () => {
    const navigate = useNavigate()
    const { idUser, isLoading } = useTestAuth()
    useEffect(() => {
        if (!idUser && !isLoading) {
            navigate("/homeGuest")
        }
    }, [idUser, isLoading, navigate])
    useEffect(() => {
        document.title = "Za Mandresy"
    }, [])
    return (
        <>
            {isLoading &&
                <div></div>
            }
            {idUser &&
                <Container>
                    <H1>
                        Vos commandes
                    </H1>
                    <List>
                        <CardNouvelleCommande>
                            <p>+</p>
                            <AjouterText>Faire une commande</AjouterText>
                        </CardNouvelleCommande>
                        {Array.from(Array(5)).map((key, value) => (
                            <Card key={value}>
                                <CardDetails>
                                    <CardTitle>
                                        Bal de fin d'année
                                    </CardTitle>
                                    <CardDescription>
                                    Commandez un service de publicité ou de placement de produit pour booster votre business.
                                    Commandez un service de publicité ou de placement.
                                    </CardDescription>
                                    <DetailsButton>
                                        Details
                                    </DetailsButton>
                                </CardDetails>
                            </Card>
                        ))}
                    </List>
                </Container>
            }
        </>
    );
};

export default HomeUser;
