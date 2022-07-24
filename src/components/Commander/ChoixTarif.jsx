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
    padding: 15px 30px 15px 30px;
    background-color: blue;
    color: white;
    font-size: 14px;
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
const formatNumber = (number) => {
    let res = ``
    let n = number.toString();
    for(let i=0;i<n.length;i++){
        if(i%3===0){
            res = `${res} ${n[i]}`
        }
        else{
            res= `${res}${n[i]}`
        }
    }
    return res;
}
const ChoixTarif = () => {
    const navigate = useNavigate();
    const [selectedTarif, setSelectedTarif] = useState(null);
    const [tarifs, setTarifs] = useState(null)
    const tarifReferences = useRef([])
    //Setting tarifs
    const URL_LIST_TARIF = `${process.env.REACT_APP_NODE_URL}/api/v1/tarif`
    useEffect(() => {
        fetch(URL_LIST_TARIF,{
            method: "GET",
            headers:{
                'Content-type':'application/json'
            }
        }).then(res=>{
            return res.json()
        }).then(data=>{
            if(!data.error){
                setTarifs(data)
            }
        })
    }, [URL_LIST_TARIF])
    //************************************************************* */
    const handleChoix = (id,nomTarif) => {
        for (let i = 0; i < tarifs.length; i++) {
            tarifReferences.current[tarifs[i]._id].style.backgroundColor = 'white';
            tarifReferences.current[tarifs[i]._id].style.color = "black";
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
                    <Tarif onClick={()=>handleChoix(tarif._id, tarif.nom)} key={tarif._id} ref={(elem)=> tarifReferences.current[tarif._id] = elem}>
                        <TarifTitle>
                            {tarif.nom}
                        </TarifTitle>
                        <TarifBar></TarifBar>
                        <TarifPrice>
                            <TarifMontant>{formatNumber(tarif.prix.montant)}</TarifMontant>
                            <TarifUnite> {tarif.prix.unite}</TarifUnite>
                        </TarifPrice>
                        <TarifConditions>
                            <Condition>
                                {tarif.conditions.nombrePublication} publications
                            </Condition>
                            <Condition>
                                {tarif.conditions.nombrePhotos} photos
                            </Condition>
                            <Condition>
                                Delais : {tarif.conditions.delaisSemaine} semaines
                            </Condition>
                        </TarifConditions>
                        <AcheterButton onClick={() => handleChoix(tarif._id, tarif.nom)}>
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