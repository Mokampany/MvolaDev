import styled from "@emotion/styled"
import Inscription from "../components/Inscription";
import Login from "../components/Login";
import { useEffect, useRef, useState } from "react"
import bg from "../assets/images/bg.png"
import Nav from "../components/Nav";
import CELLS from "vanta/dist/vanta.birds.min"
import * as THREE from "three"

const Container = styled.div`
    #authentification{
        // margin: 30px;
        padding: 20px;
        min-height: 100vh;
        color: white;
        background-color: black;
        border-radius: 10px;

        // background-image: url(${bg});
        // background-position: center;
        // background-size: cover;
        // background-repeat: no-repeat;
        // font-size: .8em;
    }
    #auths{
        display: flex;
        flex-flow: row wrap;
    }
    #inscription{
        border-radius: 20px;
    }
    #login{
        border-radius: 20px;
    }
    @media screen and (max-width: 450px){
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
    @media screen and (min-width: 800px){
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
    useEffect(() => {
        if (!vantaEffect) {
            setVantaEffect(CELLS({
                el: vantaRef.current,
                THREE: THREE,
                mouseControls: true,
                touchControls: true,
                gyroControls: false,
                minHeight: 200.00,
                minWidth: 200.00,
                scale: 1.00,
                scaleMobile: 1.00,
                backgroundColor: 0x21420,
                color1: 0xff00d1,
                color2: 0xff00f0
            }))
        }
        return () => {
            if (vantaEffect) vantaEffect.destroy()
        }
    }, [vantaEffect])
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