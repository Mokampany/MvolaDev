import styled from '@emotion/styled'
import mvola from '../../assets/images/Logo_mvola/logoMvola.png'
import QRCode from 'react-qr-code'
import { useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
const Container = styled.div`
    display: grid;
    grid-template-columns: 50% auto;
    min-height: 100vh;
`
const Left = styled.div`
    display: flex;
    background-color: white;
    justify-content: center;
    align-items: center;
    padding: 20px;
`
const Right = styled.div`
    display: flex;
    align-items: center;
    background-color: #10C6BB;
    justify-content: start;
    padding: 100px 200px;
`
const ContentLeft = styled.div`
`
const ContentRight = styled.div`
    text-align: start;
    color: black;
    background-color: white;
    width: 100%;
    height: 100%;
    font-size: 14px;
    padding: 20px;
    position: relative;
`
const H1 = styled.h1`
    font-size: 40px;
    font-weight: 700;
    max-width: 25ch;
`
const CommandeNum = styled.h2`
    font-size: 14px;
    display: flex;
    flex-flow:column;
    &:after{
        content:"";
        border-top: 1px grey solid;
        width: 100%;
    }
`
const NomDestinataire = styled.div`
    margin-bottom: 10px;
`
const Prenom = styled.div`
    margin-bottom: 10px;
`
const Tarif = styled.div`
    margin-bottom: 10px;
`
const formatNumber = (number) => {
    let res = ``
    let n = number.toString();
    for (let i = 0; i < n.length; i++) {
        if (i % 3 === 0) {
            res = `${res} ${n[i]}`
        }
        else {
            res = `${res}${n[i]}`
        }
    }
    return res;
}
const ValidationPaiement = () => {
    const location = useLocation()
    const state = location.state

    const [isLoadingUser, setIsLoadingUser] = useState(true)
    const [user, setUser] = useState(null)

    const [isLoadingCommand, setIsLoadingCommand] = useState(true)
    const [command, setCommand] = useState(null)
    useEffect(() => {
        const url = `${process.env.REACT_APP_NODE_URL}/api/v1/utilisateur/${localStorage.getItem('idUser')}`
        fetch(url, {
            method: "GET",
            headers: {
                'content-type': 'application/json'
            }
        }).then(res => {
            return res.json()
        }).then(data => {
            if (!data.error) {
                setUser(data)
            }
        }).catch(err => {
            console.log(err)
        }).finally(() => {
            setIsLoadingUser(false)
        })
        const urlCommand = `${process.env.REACT_APP_NODE_URL}/api/v1/utilisateur/${state?.idCommande}`
        fetch(urlCommand, {
            method: "GET",
            headers: {
                'content-type': 'application/json'
            }
        }).then(res => {
            return res.json()
        }).then(data => {
            if (!data.error) {
                setCommand(data)
            }
        }).catch(err => {
            console.log(err)
        }).finally(() => {
            setIsLoadingCommand(false)
        })
    }, [])
    const handlePaiement =() =>{

    }
    return (
        <Container>
            <Left>
                <ContentLeft>
                    <H1>Vous êtes sur le point de procéder à un paiement</H1>
                    <img src={mvola} alt="Logo-mvola" />
                </ContentLeft>
            </Left>
            <Right>
                <ContentRight>
                    <CommandeNum>Commande n° {state.idCommande}</CommandeNum>
                    <NomDestinataire className='row'>
                        <div style={{ fontWeight: 'bold' }} className="col-md-6">
                            Nom du destinataire
                        </div>
                        <div className="col-md-6">
                            {user && user.nom}
                        </div>
                    </NomDestinataire>
                    <Prenom className='row'>
                        <div style={{ fontWeight: 'bold' }} className="col-md-6">
                            Prenom
                        </div>
                        <div className="col-md-6">
                            {user && user.prenom}
                        </div>
                    </Prenom>
                    <Tarif className='row'>
                        <div style={{ fontWeight: 'bold' }} className="col-md-6">
                            Tarif
                        </div>
                        <div className="col-md-6">
                            {state && state?.tarif?.nom}
                        </div>
                    </Tarif>
                    <div className="row">
                        <div style={{ fontWeight: 'bold' }} className="col-md-6">
                            Numero de telephone
                        </div>
                        <div className="col-md-6">
                            {state && state.numero}
                        </div>
                    </div>
                    <br />
                    {/* <div className="row">
                        <div className="col-md-12">
                            <QRCode
                                title={`Commande ${command && command._id}`}
                                value={{
                                    tarif: `${state && state.tarif.nom}`,
                                    prix: `${state && state.tarif.prix.montant}`,
                                    conditions: `${state && state.tarif.conditions}`
                                }}
                                bgColor={'black'}
                                fgColor={'white'}
                                size={200}
                            />
                        </div>
                    </div> */}
                    <br />
                    <br />
                    <div className="row">
                        <div style={{ fontSize: '15px', fontWeight: '900' }} className="col-md-3">
                            Montant à payer
                        </div>
                        <div style={{ fontSize: '25px', fontWeight: '800' }} className="col-md-9">
                            {state && formatNumber(state.tarif.prix.montant)} {state && state.tarif.prix.unite}
                        </div>
                    </div>
                    <div style={{ position: 'absolute', bottom: '5px' }} className="row">
                        <div className="col-md-12">
                            <button onClick={handlePaiement} style={{ width: '100%' }} className="btn btn-primary">
                                Payer
                            </button>
                        </div>
                    </div>
                </ContentRight>
            </Right>
        </Container>
    );
}

export default ValidationPaiement;