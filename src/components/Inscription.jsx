import styled from "@emotion/styled"
import {useEffect, useState} from "react"
const Container = styled.div`
    .inscription{
        font-size: 1.5em;
        text-align:start;
    }
    h1{
        font-size:1.5em;
    }
    button{
        font-size: .9em;
    }
    .form div{
        margin-bottom: 10px;
    }
    @media screen and (min-width: 20px){
        
    }
    @media screen and (min-width: 450px){
    }
`
const Inscription = () => {
    const[prenom, setPrenom] = useState(null)
    const[nom, setNom] = useState(null)
    const[email, setEmail] = useState(null)
    const[mdp,setMdp] = useState(null)
    const[confirmMdp, setConfirmMdp] = useState(null)
    const handleChangePrenom = (e) => {
        setPrenom(e.target.value)
    }
    const handleChangeNom = (e) => {
        setNom(e.target.value)
    }
    const handleChangeEmail = (e) => {
        setEmail(e.target.value)
    }
    const handleChangeMdp = (e) => {
        setMdp(e.target.value)
    }
    const handleChangeConfirmMdp = (e) => {
        setConfirmMdp(e.target.value)
    }
    const handleInscription = () => {
    }
    return (
        <Container>
            <div className="inscription">
                <h1>Creer un compte</h1>
                <br />
                <form className="form">
                    <div className="row">
                        <input onChange={handleChangePrenom} type="text" className="lastName" placeholder="prenom" />
                    </div>
                    <div className="row">
                        <input onChange={handleChangeNom} type="text" className="firstName" placeholder="nom" />
                    </div>
                    <div className="row">
                        <input onChange={handleChangeEmail} type="email" className="email" placeholder="adresse email" />
                    </div>
                    <div className="row">
                        <input onChange={handleChangeMdp} type="password" className="password" placeholder="creer un mot de passe" />
                    </div>
                    <div className="row">
                        <input onChange={handleChangeConfirmMdp} type="password" className="password" placeholder="confirmer le mot de passe" />
                    </div>
                    <div className="row">
                        <span onClick={handleInscription} className="btn btn-primary">Inscription</span>
                    </div>
                </form>
            </div>
        </Container>
    );
}

export default Inscription;