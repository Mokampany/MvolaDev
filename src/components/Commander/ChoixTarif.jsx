import styled from "@emotion/styled";
import { useEffect } from "react";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
const rose = "#F069AB";
const bgColor = "#0E102E";
const Container = styled.div`
    padding-top: 100px;
    display: flex;
    flex-flow: column;
    align-items: center;
    background-color: ${bgColor};
    // color: white;
    min-height: 100vh;
    @media (max-width: 800px){
        padding: 50px 0 50px 0;
    }
`
const H1 = styled.h1`
    color: white;
    font-weight: 800;
    font-size: 25px;
    display: flex;
    flex-flow:column;
    align-items: center;
    &:after{
        content: "";
        width: 80%;
        border-top: 1px solid ${rose};
        margin: 20px 0 20px 0;
    }
`
const Bar = styled.div`
    // width: 25%;
    // border-top: 1px solid ${rose};
    // margin-bottom: 40px;
    // @media (max-width: 800px){
    //     width: 50%;
    // }
`
const Tarifs = styled.div`
    display: flex;
    justify-content: space-around;
    min-height: 400px;
    min-width: 75vw;
    @media (max-width: 800px){
        display: flex;
        flex-flow: column;
        min-width: 50%;
    }
`
const Tarif = styled.div`
    display: flex;
    flex-flow: column;
    align-items: center;
    background-color: white;
    padding: 50px 40px 50px 40px;
    border-radius: 10px;
    margin: 0 10px 0 10px;
    &:hover{
        cursor: pointer;
        opacity: .9;
        // background-color: green !important;
        // color: white !important;
    }
    @media (max-width: 800px){
        margin-bottom: 30px;
    }
`
const TarifTitle = styled.h2`
    font-size: 30px;
    font-weight: 700;
`
const TarifBar = styled.div`
    border-top: 1px solid ${rose};
    width: 75%;
    margin: 10px 0 20px 0;
`
const TarifPrice = styled.div`
    margin-bottom: 20px;
`
const TarifMontant = styled.span`
    font-size: 25px;
    font-weight: 700;

`
const TarifUnite = styled.span`
    font-size: 20px;
`
const TarifConditions = styled.ul`
    text-align: start;
    list-style: none;
    margin-bottom: 60px;
`
const Condition = styled.li`
    font-size: 15px;
    margin-bottom: 15px;
    font-weight: bold;
    &:before{
        content: ".";
        margin-right: 10px;
        color:${rose};
        font-size: 20px;
        font-weight: 900;
    }
`
const AcheterButton = styled.div`
    border: 1px solid blue;
    padding: 10px 30px 10px 30px;
    user-select: none;
    cursor: pointer;
    transition: background-color .3s;
    background-color: blue;
    color : white;
    font-size: 14px;
    &:hover{
        background-color: transparent;
        color: black;
    }
`
const ContinueButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 15px;
    background-color: blue;
    color: white;
    margin-top: 30px;
    // border-radius: 0 50px 0 50px;
    user-select: none;
    &:hover{
        opacity: .8;
        cursor: pointer;
    }
`
const BG_COLORS = {
    WHITE: "white",
    YELLOW: "yellow"
};
const ChoixTarif = () => {
    const navigate = useNavigate();
    const [selectedTarif, setSelectedTarif] = useState(null);
    const [tarifs, setTarifs] = useState(null)
    const tarifReferences = useRef([])
    //Setting tarifs
    useEffect(() => {
        const tarif1 = {
            id: "qwdwqd",
            nom: "Normal",
            couleur: BG_COLORS.WHITE,
            prix: "200 000",
            unite: "Ar TTC",
            conditions: {
                publication: 1,
                photo: 4,
                delaisSemaine: 4,
            }
        }
        const tarif2 = {
            id: 1,
            nom: "Avancé",
            couleur: BG_COLORS.WHITE,
            prix: "300 000",
            unite: "Ar TTC",
            conditions: {
                publication: 2,
                photo: 6,
                delaisSemaine: 3,
            }
        }
        const tarif3 = {
            id: 2,
            nom: "Premium",
            couleur: BG_COLORS.WHITE,
            prix: "500 000",
            unite: "Ar TTC",
            conditions: {
                publication: 4,
                photo: 10,
                delaisSemaine: 2,
            }
        }
        let elements = [tarif1, tarif2, tarif3];
        setTarifs(elements);
    }, [])
    
    const handleChoix = (id) => {
        for (let i = 0; i < tarifs.length; i++) {
            tarifReferences.current[tarifs[i].id].style.backgroundColor = tarifs[i].couleur;
            tarifReferences.current[tarifs[i].id].style.color = "black";
        }
        tarifReferences.current[id].style.backgroundColor = "green";
        tarifReferences.current[id].style.color = "white";
        //Setting the tarif
        try{
            window.MyLib.choixTarif = id;
            setSelectedTarif(id);
        }catch(err){
            console.log(`error : ${err}`)
        }
    }
    useEffect(()=>{

    },[selectedTarif])

    const handleContinue = () => {
        navigate("choixPaiement")
    }
    
    return (
        <Container>
            <H1>
                Choisissez un tarif
            </H1>
            <Bar></Bar>
            <Tarifs>
                {tarifs && tarifs.map((tarif) => (
                    <Tarif onClick={()=>handleChoix(tarif.id)} key={tarif.id} ref={(elem)=> tarifReferences.current[tarif.id] = elem} style={{ backgroundColor: tarif?.couleur }}>
                        <TarifTitle>
                            {tarif.nom}
                        </TarifTitle>
                        <TarifBar></TarifBar>
                        <TarifPrice>
                            <TarifMontant>{tarif.prix}</TarifMontant>
                            <TarifUnite> {tarif.unite}</TarifUnite>
                        </TarifPrice>
                        <TarifConditions>
                            <Condition>
                                {tarif.conditions.publication} publications
                            </Condition>
                            <Condition>
                                {tarif.conditions.photo} photos
                            </Condition>
                            <Condition>
                                Delais : {tarif.conditions.delaisSemaine} semaines
                            </Condition>
                        </TarifConditions>
                        <AcheterButton onClick={() => handleChoix(tarif.id)}>
                            Choisir
                        </AcheterButton>
                    </Tarif>
                ))}
            </Tarifs>
            {selectedTarif &&
            <ContinueButton onClick={handleContinue}>
                Continuer
            </ContinueButton>
            }
        </Container>
    );
}

export default ChoixTarif;