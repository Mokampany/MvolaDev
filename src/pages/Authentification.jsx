import styled from "@emotion/styled"
import Inscription from "../components/Inscription";
import Login from "../components/Login";
import { useEffect } from "react"
import bg from "../assets/images/bg.png"
import Nav from "../components/Nav";
const Container = styled.div`
    #authentification{
        margin: 30px;
        padding: 20px;
        min-height: 100vh;
        color: #282c34;
        background-color: ;
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
    return (
        <Container>
            <Nav />
            <div id="authentification">
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