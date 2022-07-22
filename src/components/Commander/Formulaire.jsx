import styled from "@emotion/styled";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import illustration from "../../assets/images/Illustrations/secure_login.png"
const rose = "#F069AB";
const bgColor = "#0E102E";

const Formulaire = () => {
    const navigate = useNavigate();
    const [tarif, setTarif] = useState(null);
    const [paiement, setPaiement] = useState(null);
    const [nom, setNom] = useState(null);
    const [prenom, setPrenom] = useState(null);
    const [titreCommande, setTitreCommande] = useState(null);
    const [nomEntreprise, setNomEntreprise] = useState(null);
    const [descriptionCommande, setDescriptionCommande] = useState(null);
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
        const commande = {
            tarif: tarif,
            paiement: paiement,
            infoPerso: {
                nom: nom,
                prenom: prenom,
            },
            informationsCommande: {
                titreCommande: titreCommande,
                nomEntreprise: nomEntreprise,
                description: descriptionCommande
            },
            images: [images]
        }
        console.log(commande);
    }
    useEffect(() => {
        try {
            const tarif = window.MyLib.choixTarif;
            const paiement = window.MyLib.choixPaiement;
            setTarif(tarif);
            setPaiement(paiement);
        } catch (err) {
            console.log(err)
            // navigate("/");
            return;
        }
    }, [])

    //Render

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
                                    <TextValue>{tarif}</TextValue>
                                </SectionSousForm>
                                <SectionSousForm>
                                    <Label>Montant</Label>
                                    <TextValue>5000 Ar</TextValue>
                                </SectionSousForm>
                                <SectionSousForm>
                                    <Label>Methode de paiement</Label>
                                    <TextValue style={{ color: "yellow" }}>Mvola</TextValue>
                                </SectionSousForm>
                            </SousForm>
                        </Section>
                        <Section>
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
                        </Section>
                        <Section>
                            <H2>
                                Commande :
                            </H2>
                            <SousForm>
                                <SectionSousForm>
                                    <Label>Titre de la commande </Label>
                                    <Input onChange={handleChangeTitreCommande}></Input>
                                </SectionSousForm>
                                <SectionSousForm>
                                    <Label>Nom de l'entreprise </Label>
                                    <Input onChange={handleChangeNomEntreprise}></Input>
                                </SectionSousForm>
                                <SectionSousForm>
                                    <Label>Description de la commande </Label>
                                    <TextArea onChange={handleChangeDescriptionCommande}></TextArea>
                                </SectionSousForm>
                                <Images>
                                    <Label>Choisissez des images à inserer </Label>
                                    <Input type="file" multiple="multiple"></Input>
                                </Images>
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
    background-color: ${bgColor};
    color: white;
    display: flex;
    flex-flow: column;
`
const H1 = styled.h1`
    font-size: 20px;
    font-weight: 500;
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
`
const Right = styled.div`
    
`
const Img = styled.img`
    width: 80%;
`
export default Formulaire;