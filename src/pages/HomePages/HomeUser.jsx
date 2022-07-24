import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import "react-alice-carousel/lib/alice-carousel.css";
import { useNavigate } from "react-router-dom";
import { UseFetchGet } from "../../services/UseFetchGet";
import useTestAuth from "../../services/useTestAuth";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import bg from '../../assets/images/Backgrounds/bg.png'
import spinner from '../../assets/images/Gifs/spinner.png'
const bgColor = "#0E102E";
const rose = "#F069AB";
const grey = "#2E2E2E";
const whiteGrey = "#E7E7E7";

const Container = styled.div`
    padding-top : 100px;
    min-height: 100vh;
    background-image: url(${bg});
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: left;
    color: white;
    display: flex;
    flex-flow: column;
    // justify-content: center;
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
    border-radius: 10px;
    padding-top: 20px;
    // padding: 20px 20px 0 20px;
    padding: 20px 150px 0 150px;
    @media (max-width: 1100px){
        justify-content: center;
        padding: 20px 20px 0 20px;
    }
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
const AjouterText = styled.p`
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
    position: relative;
    border-radius: 10px;
    border: 1px solid white;
    padding: 20px 20px 0 20px;
    background-color: white;
    color: black;
    height: 250px;
    user-select: none;
    &:hover{
        cursor: pointer;
        opacity: .9;
    }
    display: flex;
    flex-flow: column;
`
const CardTitle = styled.h2`
    font-weight: 700;
    font-size: 15px;
    margin-bottom: 10px;
    min-height: 50px;
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
    position: absolute;
    font-weight:800;
    // padding: 10px;
    text-align: start;
    min-width: 100px;
    font-size: 12px;
    display: flex;
    justify-content: center;
    bottom: 0px;
    left: 0;
    right: 0;
    height: 60px;
`
const Green = styled.div`
    // background-color: green;
    color : green;
`
const Red = styled.div`
    color: red;
`
const Yellow = styled.div`
    color :yellow;
`

const Approuve = styled.div`
    color: green;
`
const NonApprouve = styled.div`
    color: red;
`
const ContentModal = styled.div`
    
`
const PrixTarif = styled.div`
    display:flex;
    flex-flow: column;
    &:after{
        content: "";
        width: 50%;
    }
    margin-bottom: 20px;
`
const H2 = styled.h2`
display:flex;
flex-flow: column;
    &:before{
        content: "";
        width: 100%;
        border-bottom: 1px solid black;
    }
    font-size: 20px;
    font-weight: 800;
`
const HomeUser = () => {

    //Checking user
    const { idUser, isLoading } = useTestAuth()
    const navigate = useNavigate()
    useEffect(() => {
        if (!idUser && !isLoading) {
            navigate("/homeGuest")
            return
        }
    }, [idUser, isLoading, navigate])
    //***** */
    //Liste des commandes
    const URL_LIST_COMMAND = `${process.env.REACT_APP_NODE_URL}/api/v1/utilisateur/commande/${idUser}`
    const headers = {
        'content-type': 'application/json'
    }
    const [commandes, setCommandes] = useState(null)
    const [loadingCommandes, setLoadingCommandes] = useState(true)
    useEffect(() => {
        if (idUser && !isLoading) {
            fetch(URL_LIST_COMMAND, {
                method: "GET",
                headers: {
                    'Content-type': 'application/json'
                }
            }).then(res => {
                return res.json()
            }).then(data => {
                if (data.error) {
                    console.log(data)
                } else {
                    setCommandes(data)
                }
            }).catch(err => {

            }).finally(() => {
                setLoadingCommandes(false)
            })
        }
    }, [idUser, isLoading, URL_LIST_COMMAND])
    /** ***********************************/
    //Title
    useEffect(() => {
        window.scroll(0, 0);
        document.title = "Za Mandresy"
    }, [])

    const handleNavigate = (path) => {
        navigate(path)
    }
    //Modal ***********************************
    const [idCurrentCommand, setIdCurrentCommand] = useState(null)
    const [currentCommand, setCurrentCommand] = useState(null);
    const [show, setShow] = useState(false);
    const [tarif, setTarif] = useState(null)
    const handleClose = () => setShow(false);
    const handleShow = (id) => {
        setShowInputPaiement(false)
        setIdCurrentCommand(id)
        setShow(true);
    }
    useEffect(() => {
        // console.log(idCurrentCommand)
        const url = `${process.env.REACT_APP_NODE_URL}/api/v1/commande/${idCurrentCommand}`
        fetch(url, {
            method: "GET",
            headers: {
                'content-type': 'application/json'
            }
        }).then(res => {
            return res.json()
        }).then(data => {
            if (!data.error) {
                setCurrentCommand(data)
            }
        })
        // const newCommand = commandes.filter(obj => {
        //     return obj._id == 
        // })
    }, [idCurrentCommand])

    //GET TARIF
    useEffect(() => {
        const urlTarif = `${process.env.REACT_APP_NODE_URL}/api/v1/tarif/${currentCommand?.informationPaiement.idTarif}`
        fetch(urlTarif, {
            method: "GET",
            headers: {
                'content-type': 'application/json'
            }
        }).then(res => {
            return res.json()
        }).then(data => {
            if (!data.error) {
                setTarif(data)
            }
        }).catch(err => {
            console.log(err)
        })
    }, [currentCommand])
    const [showInputPaiement, setShowInputPaiement] = useState(false)
    const handlePaiement = (idCommand) => {
        setShowInputPaiement(true)
    }



    const [numero, setNumero] = useState(null)
    const handleChangeNumero = (e) => {
        setNumero(e.target.value);
    }

    const handleValiderPaiement = (idCommand) => {
        navigate('/homeUser/ValidationPaiement', {
            state: {
                idCommand: idCommand,
                numero: numero,
                tarif: tarif
            }
        })
    }
    return (
        <>
            {isLoading &&
                <Container style={{ justifyContent: 'center', flexFlow: 'row' }}>
                    <div className="spinner-grow text-primary" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                    <div className="spinner-grow text-secondary" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                    <div className="spinner-grow text-success" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                </Container>
            }
            {idUser &&
                <Container>
                    <H1>
                        Vos commandes
                    </H1>
                    <List>
                        <CardNouvelleCommande onClick={() => handleNavigate("/commander")}>
                            <AjouterText>
                                +
                            </AjouterText>
                        </CardNouvelleCommande>
                        {commandes &&
                            commandes.map((commande, value) => (
                                <Card key={value} onClick={() => { handleShow(commande._id) }} >
                                    <CardDetails>
                                        <CardTitle>
                                            {commande.informationCommande.titreCommande}
                                            <br />
                                            <span style={{ fontSize: '10px', color: grey }}>{commande.informationCommande.nomEntreprise}</span>
                                        </CardTitle>
                                        <CardDescription>
                                            {commande.informationCommande.description}
                                        </CardDescription>
                                        <DetailsButton>
                                            {commande.estApprouve && !commande.estPaye && <Yellow>En attente de paiement...</Yellow>}
                                            {!commande.estApprouve && <Red>En attente d'approbation</Red>}
                                            {commande.estApprouve && commande.estPaye && <Green>Commande payée</Green>}

                                        </DetailsButton>
                                        <DetailsButton>
                                        </DetailsButton>
                                    </CardDetails>
                                </Card>
                            ))
                        }
                        <Modal size="xl"
                            aria-labelledby="contained-modal-title-vcenter"
                            centered show={show} onHide={handleClose}>
                            {currentCommand &&
                                <>
                                    <Modal.Header style={{ flexFlow: 'column', alignItems: "start" }} closeButton>
                                        <Modal.Title>{currentCommand.informationCommande.titreCommande}</Modal.Title>
                                        {currentCommand.estApprouve === true ? <Approuve>Commande approuvée</Approuve> : <NonApprouve>En attente d'approbation</NonApprouve>}
                                        {currentCommand.estApprouve === true && currentCommand.estPaye === true ? <span style={{ color: 'green' }} className="">Déjà payée</span> : <></>}
                                        {currentCommand.estApprouve === true && currentCommand.estPaye === false ? <span style={{ color: 'red' }} className="">Non payée</span> : <></>}
                                    </Modal.Header>
                                    <Modal.Body>
                                        <ContentModal>
                                            <PrixTarif>
                                                <span><b>Tarif</b> : {tarif && tarif.nom}</span> <span><b>Prix</b> : {tarif && tarif.prix.montant} {tarif && tarif.prix.unite}</span>
                                            </PrixTarif>
                                            <H2>Description</H2>
                                            <div>{currentCommand.informationCommande.description}</div>
                                            <br />
                                            {currentCommand.estApprouve && currentCommand.estPaye && <>
                                                <iframe
                                                    title={'title'}
                                                    src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FZaMandresy.Prod%2Fposts%2F1002017807314778&show_text=true&width=500"
                                                    width={500}
                                                    height={500}
                                                    style={{ border: "none", overflow: "hidden" }}
                                                    scrolling="no"
                                                    frameBorder={0}
                                                    allowFullScreen="true"
                                                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                                                />
                                                <iframe
                                                    title={'title2'}
                                                    src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FZaMandresy.Prod%2Fposts%2F1002475767268982&show_text=true&width=500"
                                                    width={500}
                                                    height={500}
                                                    style={{ border: "none", overflow: "hidden" }}
                                                    scrolling="no"
                                                    frameBorder={0}
                                                    allowFullScreen="true"
                                                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                                                />
                                            </>}
                                            <br />
                                            <br />
                                        </ContentModal>
                                    </Modal.Body>
                                    <Modal.Footer style={{ justifyContent: 'start' }}>
                                        {currentCommand.estApprouve === true && currentCommand.estPaye === false ? <button onClick={() => { handlePaiement(currentCommand._id) }} className="btn btn-success">Proceder au paiement</button> : <></>}
                                        {showInputPaiement && <>Entrez votre numero (0343500003) :<input onChange={handleChangeNumero}></input> <button onClick={() => { handleValiderPaiement(currentCommand._id) }} className="btn btn-primary">Continuer</button></>}
                                    </Modal.Footer>
                                </>}
                        </Modal>
                    </List>
                </Container>
            }
        </>
    );
};

export default HomeUser;
