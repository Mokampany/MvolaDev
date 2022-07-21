import styled from "@emotion/styled";
import { useEffect } from "react";
import "react-alice-carousel/lib/alice-carousel.css";
import { useNavigate } from "react-router-dom";
import useTestAuth from "../../services/useTestAuth";

const bgColor = "#0E102E";
const rose = "#F069AB";
const grey = "#2E2E2E";
const whiteGrey = "#E7E7E7";

const Container = styled.div`
    padding-top : 100px;
    min-height: 100vh;
    background-color: ${bgColor};
    color: white;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
`;
const H1 = styled.h1`
    font-size: 20px;
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
const Bar = styled.div`

`

const List = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: start;
    @media (max-width: 1100px){
        justify-content: center;
        // padding: 0px;
    }
    border-radius: 10px;
    padding-top: 20px;
    padding: 20px 20px 0 20px;
`
const CardNouvelleCommande = styled.div`
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
    width: 275px;
    height: 250px;
    border: 1px solid white;
    border-radius: 10px;
    background-color: white;
    &:hover{
        cursor: pointer;
        background-color: ${whiteGrey};
    }
    user-select: none;
    margin: 0 10px 10px 10px;
`
const AjouterText =styled.p`
    display: flex;
    flex-flow: column;
    color: blue;
    font-size: 50px;
    &:after{
        content:"Ajouter une commande";
        font-size: 15px;
        font-weight: bold;
    }
`

const Card = styled.div`
    width: 275px;
    text-align: start;
    margin: 0 10px 10px 10px;
`
const CardDetails = styled.div`
    border-radius: 10px;
    border: 1px solid white;
    padding: 20px;
    background-color: white;
    color: black;
    height: 250px;
    user-select: none;
    &:hover{
        cursor: pointer;
        opacity: .9;
    }
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
    text-align: center;
    min-width: 100px;
    font-size: 12px;
`
const HomeUser = () => {
    window.tarif = "normal";
    const navigate = useNavigate()
    const { idUser, isLoading } = useTestAuth()
    useEffect(() => {
        if (!idUser && !isLoading) {
            navigate("/homeGuest")
        }
    }, [idUser, isLoading, navigate])
    useEffect(() => {
        window.scroll(0,0);
        document.title = "Za Mandresy"
    }, [])

    const handleNavigate = (path) => {
        navigate(path)
    }
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
                    <Bar></Bar>
                    <List>
                        <CardNouvelleCommande onClick={()=>handleNavigate("/commander")}>
                            <AjouterText>
                                +
                            </AjouterText>
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
                                    <DetailsButton style={{color: "red"}}>
                                        Etat: En cours
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
