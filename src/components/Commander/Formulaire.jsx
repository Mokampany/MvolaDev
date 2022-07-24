import styled from "@emotion/styled";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import illustration from "../../assets/images/Illustrations/secure_login.png"
const rose = "#F069AB";
const bgColor = "#0E102E";

const Formulaire = () => {
    const navigate = useNavigate();

    useEffect(() => {
        window.MyLib.choixPaiement = '62d9d6d507a38024d0b90281'
        if (!window.MyLib?.choixTarif || !window.MyLib?.choixPaiement) {
            alert("An error occured")
            navigate("/")
        }
    })

    //Getting tarif By Id
    const url = `${process.env.REACT_APP_NODE_URL}/api/v1/tarif/${window.MyLib?.choixTarif}`
    const [tarifById, setTarifById] = useState(null)
    useEffect(() => {
        fetch(url, {
            method: "GET",
            headers: {
                "content-type": "application/json"
            }
        }).then(res => {
            return res.json()
        }).then(data => {
            setTarifById(data)
        })
    }, [url])
    // ********************************************************************
    //Getting method de paiement
    const urlTypePaiement = `${process.env.REACT_APP_NODE_URL}/api/v1/typeDePaiement/${window.MyLib?.choixPaiement}`
    const [typeDePaiement, setTypeDePaiement] = useState(null)
    useEffect(() => {
        fetch(urlTypePaiement, {
            method: "GET",
            headers: {
                "content-type": "application/json"
            }
        }).then(res => {
            return res.json()
        }).then(data => {
            setTypeDePaiement(data)
        }).catch(err => {
            console.log(err)
        }).finally(() => {

        })
    }, [urlTypePaiement])
    //**************************************************************** */
    const [nom, setNom] = useState(null);
    const [prenom, setPrenom] = useState(null);
    const [titreCommande, setTitreCommande] = useState("Publicité pour ma marque de chaussure");
    const [nomEntreprise, setNomEntreprise] = useState("Chaussure d'entreprise");
    const [descriptionCommande, setDescriptionCommande] = useState("Donc voilà , j'ai besoin d'une publicité pour ma marque de chaussure donc je fais appel à vous!");
    const [images, setImages] = useState([]);

    const handleChangeNom = (e) => {
        setNom(e.target.value)
    }
    const handleChangePrenom = (e) => {
        setPrenom(e.target.value)
    }
    const handleChangeTitreCommande = (e) => {
        setTitreCommande(e.target.value)
    }
    const handleChangeNomEntreprise = (e) => {
        setNomEntreprise(e.target.value)
    }
    const handleChangeDescriptionCommande = (e) => {
        setDescriptionCommande(e.target.value)
    }
    const handleChangeImages = (e) => {

    }
    const handleSubmit = () => {
        const URL_COMMANDER = `${process.env.REACT_APP_NODE_URL}/api/v1/utilisateur/commande`
        const commande = {
            idUtilisateur: localStorage.getItem('idUser'),
            informationCommande: {
                titreCommande: titreCommande,
                nomEntreprise: nomEntreprise,
                description: descriptionCommande
            },
            informationPaiement: {
                idTypeDePaiement: typeDePaiement._id,
                nomTypeDePaiement: typeDePaiement.nom,
                idTarif: tarifById._id,
                nomTarif: tarifById.nom
            }
        }
        fetch(URL_COMMANDER,{
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(commande)
        }).then(res=>{
            return res.json()
        }).then(data=>{
            if(!data.error){
                alert('Demande de commande envoyée')
                window.location = "/"
            }else{
                alert('Veuillez remplir tous les champs')
            }
        })
        console.log(JSON.stringify(commande));
    }
    //Render
    useEffect(() => {
        console.log(tarifById)
    }, [tarifById])

    return (
        <Container>
            <H1>
                Formulaire
            </H1>
            <Form>
                <Left>
                    <div>
                        <Section>
                            <H2>
                                Details :
                            </H2>
                            <SousForm>
                                <SectionSousForm>
                                    <Label>Tarif</Label>
                                    <TextValue>{tarifById && <>{tarifById.nom}</>}</TextValue>
                                </SectionSousForm>
                                <SectionSousForm>
                                    <Label>Montant</Label>
                                    <TextValue>{tarifById && <>{tarifById.prix.montant} {tarifById.prix.unite}</>}</TextValue>
                                </SectionSousForm>
                                <SectionSousForm>
                                    <Label>Methode de paiement</Label>
                                    <TextValue style={{ color: "yellow" }}>{typeDePaiement ? <>{typeDePaiement.nom}</> : <>Loading ...</>}</TextValue>
                                </SectionSousForm>
                            </SousForm>
                        </Section>
                        {/* <Section>
                            <H2>
                                Informations personnels :
                            </H2>
                            <SousForm>
                                <SectionSousForm>
                                    <Label>Nom</Label>
                                    <Input onChange={handleChangeNom}></Input>
                                </SectionSousForm>
                                <SectionSousForm>
                                    <Label>Prenom</Label>
                                    <Input onChange={handleChangePrenom}></Input>
                                </SectionSousForm>
                            </SousForm>
                        </Section> */}
                        <Section>
                            <H2>
                                Commande :
                            </H2>
                            <SousForm>
                                <SectionSousForm>
                                    <Label>Titre de la commande </Label>
                                    <Input value={"Publicité pour ma marque de chaussure"} onChange={handleChangeTitreCommande}></Input>
                                </SectionSousForm>
                                <SectionSousForm>
                                    <Label>Nom de l'entreprise </Label>
                                    <Input value={"Chaussure d'entreprise"} onChange={handleChangeNomEntreprise}></Input>
                                </SectionSousForm>
                                <SectionSousForm>
                                    <Label>Description de la commande </Label>
                                    <TextArea value={"Donc voilà , j'ai besoin d'une publicité pour ma marque de chaussure donc je fais appel à vous!"} onChange={handleChangeDescriptionCommande}></TextArea>
                                </SectionSousForm>
                                {/* <Images>
                                    <Label>Choisissez des images à inserer </Label>
                                    <Input type="file" multiple="multiple"></Input>
                                </Images> */}
                            </SousForm>
                        </Section>
                        <Section>
                            <H2>
                                Envoyer la demande :
                            </H2>
                            <SousForm>
                                <ValiderButton onClick={handleSubmit}>Valider</ValiderButton>
                            </SousForm>
                        </Section>
                    </div>
                </Left>
                <Right>
                    <Img src={illustration}></Img>
                </Right>
            </Form>
        </Container>
    );
}
const Container = styled.div`
    padding-top : 100px;
    min-height: 100vh;
    color: white;
    display: flex;
    flex-flow: column;
`
const H1 = styled.h1`
    font-size: 30px;
    font-weight: 800;
    user-select: none;
    margin-bottom: 10px;
    display: flex;
    flex-flow: column;
    align-items: center;
    &:after{
        content:"";
        width: 20%;
        border-top: 1px solid ${rose};
        margin: 20px 0 20px 0;
    }
`
const Form = styled.form`
    display: grid;
    grid-template-columns: 50% auto;
    padding: 20px;
    @media (max-width: 800px){
        display: flex;
        flex-flow: column;
    }
`
const Left = styled.div`
    display: flex;
    flex-flow: column;
    align-items: center;
`
const Section = styled.section`
    // margin: auto;
    display: flex;
    flex-flow: column;
    margin-bottom: 20px;
`
const H2 = styled.h2`
    font-size: 18px;
    text-align: start;
    display: flex;
    flex-flow: column;
    margin-bottom: 20px;
    &:after{
        content:"";
        width: 100%;
        border-top: 2px solid ${rose};
    }
`
const SousForm = styled.div`
    font-size: 14px;
`
const SectionSousForm = styled.section`
    display: flex;
    margin-bottom: 20px;

`
const Images = styled.div`
    display: flex;
    flex-flow: column;
`
const Label = styled.label`
    font-weight: 500;
    flex: 1;
    text-align: start;
    margin-right: 10px;
    &:after{
        content: " : ";
    }
    font-size: 16px;
    text-decoration: underline;
`
const TextValue = styled.label`
    font-weight: 500;
    flex: 1;
    text-align: start;
    margin-right: 10px;
`
const Input = styled.input`
    flex: 1;
`
const TextArea = styled.textarea`
    flex: 1;
`
const ValiderButton = styled.div`
    background-color: green;
    border: 1px solid green;
    padding: 10px;
    transition: background-color .2s;
    &:hover{
        cursor: pointer;
        background-color: transparent;
    }
    font-size: 20px;
`
const Right = styled.div`
    // background-color: ;
`
const Img = styled.img`
    width: 70%;
`
export default Formulaire;