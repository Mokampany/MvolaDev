import styled from "@emotion/styled";
const rose = "#F069AB";
const blue = "#83DDFF";
const Container = styled.div`
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
    background-color: ${blue};
    min-height: 100vh;
    @media (max-width: 800px){
        padding: 50px 0 50px 0;
    }
`
const H1 = styled.h1`
    font-weight: 800;
    font-size: 50px;
    @media (max-width: 800px){
        font-size: 35px;
    }
`
const Bar = styled.div`
    width: 25%;
    border-top: 2px solid ${rose};
    margin-bottom: 30px;
    @media (max-width: 800px){
        width: 50%;
    }
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
    background-color: hsla(360, 100%, 100%, 0.7);
    padding: 50px 40px 50px 40px;
    border-radius: 10px;
    margin: 0 10px 0 10px;
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
    margin: 20px;
`
const TarifPrice = styled.div`
    margin-bottom: 20px;
`
const TarifMontant = styled.span`
    font-size: 35px;
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
    font-size: 18px;
    margin-bottom: 15px;
    &:before{
        content: ".";
        margin-right: 10px;
        color:${rose};
        font-size: 20px;
        font-weight: 900;
    }
`
const AcheterButton = styled.div`
    border: 1px solid ${rose};
    padding: 10px 30px 10px 30px;
    user-select: none;
    cursor: pointer;
    transition: background-color .3s;
    background-color: ${rose};
    color : white;
    &:hover{
        background-color: transparent;
        color: ${rose};
    }
`
const TarifComponent = () => {
    return (
        <Container>
            <H1>
                Nos tarifs
            </H1>
            <Bar></Bar>
            <Tarifs>
                <Tarif>
                    <TarifTitle>
                        Normal
                    </TarifTitle>
                    <TarifBar></TarifBar>
                    <TarifPrice>
                        <TarifMontant>200 000 </TarifMontant>
                        <TarifUnite>Ar TTC</TarifUnite>
                    </TarifPrice>
                    <TarifConditions>
                        <Condition>1 publication</Condition>
                        <Condition>4 photos maximum</Condition>
                        <Condition>0 video</Condition>
                    </TarifConditions>
                    <AcheterButton>
                        Acheter
                    </AcheterButton>
                </Tarif>
                <Tarif>
                    <TarifTitle>
                        Avancé
                    </TarifTitle>
                    <TarifBar></TarifBar>
                    <TarifPrice>
                        <TarifMontant>350 000 </TarifMontant>
                        <TarifUnite>Ar TTC</TarifUnite>
                    </TarifPrice>
                    <TarifConditions>
                        <Condition>1 publication</Condition>
                        <Condition>4 photos maximum</Condition>
                        <Condition>0 video</Condition>
                    </TarifConditions>
                    <AcheterButton>
                        Acheter
                    </AcheterButton>
                </Tarif>
                <Tarif>
                    <TarifTitle>
                        Premium
                    </TarifTitle>
                    <TarifBar></TarifBar>
                    <TarifPrice>
                        <TarifMontant>500 000 </TarifMontant>
                        <TarifUnite>Ar TTC</TarifUnite>
                    </TarifPrice>
                    <TarifConditions>
                        <Condition>1 publication</Condition>
                        <Condition>4 photos maximum</Condition>
                        <Condition>0 video</Condition>
                    </TarifConditions>
                    <AcheterButton>
                        Acheter
                    </AcheterButton>
                </Tarif>
            </Tarifs>
        </Container>
    );
}

export default TarifComponent;