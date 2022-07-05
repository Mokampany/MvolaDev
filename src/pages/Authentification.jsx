import styled from "@emotion/styled"
import Inscription from "../components/Inscription";
import Login from "../components/Login";
import { useEffect, useRef, useState } from "react"
import bg from "../assets/images/bg.png"
import Nav from "../components/Nav";
import CELLS from "vanta/dist/vanta.birds.min"
import * as THREE from "three"

const Container = styled.div`
    h1{
        font-weight: 600;
        color: #F069AB;
    }
    .btn{
        border-color:#F069AB;
        background-color:#F069AB;
        font-weight: bolder;
    }
    #authentification{
        margin: 30px 30px 0 30px;
        padding: 20px;
        min-height: 100vh;
        color: black;
        background-color: white;
        border-radius: 10px;
    }
    #auths{
        display: flex;
        flex-flow: column;
    }
    #inscription{
        border-radius: 20px;
    }
    #login{
        border-radius: 20px;
    }
    //MOBILE VIEW
    @media screen and (max-width: 850px){
        #auths{
            justify-content:center;
        }
        #inscription{
            padding: 10px;
        }
        #login{
            padding: 10px;
        }
    }
    //DESKTOP VIEW
    @media screen and (min-width: 850px){
        #auths{
            display: grid;
            grid-template-columns: 50% auto;
        }
        #inscription{
            padding:50px;
            margin: 0 30px 0 30px;
        }
        #login{
            padding:50px;
            margin: 0 30px 0 30px;
        }
    }
`
const Authentification = () => {
    useEffect(() => {
        document.title = "Authentification"
    }, [])

    const [vantaEffect, setVantaEffect] = useState(0)
    const vantaRef = useRef(null)
    return (
        <Container>
            <Nav />
            <div ref={vantaRef} id="authentification">
                <div className="za-mandresy">
                    <h1>Za mandresy</h1>
                </div>
                <div className="tongasoa">
                    <p>Tongasoa!</p>
                    <p>Votre premier site de divertissement</p>
                    <p>Créez votre compte ou connectez-vous!</p>
                </div>
                <div id="auths">
                    <div id="inscription">
                        <Inscription />
                    </div>
                    <div id="login">
                        <Login />
                    </div>
                </div>
            </div>
        </Container>
    );
}

export default Authentification;