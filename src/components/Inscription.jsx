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
    return (
        <Container>
            <div className="inscription">
                <h1>Creer un compte</h1>
                <br />
                <form className="form">
                    <div className="row">
                        <input type="text" className="lastName" placeholder="prenom" />
                    </div>
                    <div className="row">
                        <input type="text" className="firstName" placeholder="nom" />
                    </div>
                    <div className="row">
                        <input type="email" className="email" placeholder="adresse email" />
                    </div>
                    <div className="row">
                        <input type="password" className="password" placeholder="creer un mot de passe" />
                    </div>
                    <div className="row">
                        <input type="password" className="password" placeholder="confirmer le mot de passe" />
                    </div>
                    <div className="row">
                        <button className="btn btn-primary">Inscription</button>
                    </div>
                </form>
            </div>
        </Container>
    );
}

export default Inscription;