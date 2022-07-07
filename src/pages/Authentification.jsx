import {
    Route,
    Routes,
} from "react-router-dom";

import styled from "@emotion/styled"
import Inscription from "../components/Inscription";
import Login from "../components/Login";
import { useEffect} from "react"
import Nav from "../components/Nav";
import logo from "../assets/images/logo.jpg"

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
        color: white;
        background-color: inherit;
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
        .logo-auth img{
            width: 0%;
        }
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
        .logo-auth{
            // background-color: black;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .logo-auth img{
            width: 85%;
            filter: drop-shadow(0px 0px 10px #282c34);
        }
        #auths logo-auth, #auths #inscription, #auths #login{
            // display: flex;
            align-items: center;
            // width: 100%;
            // justify-content: center;
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
            <div id="authentification">
                <div id="auths">
                    <div className="logo-auth" style={{ position: "relative" }}>
                        <img style={{ borderRadius: "20px" }} src={logo} alt="logo" />
                    </div>
                    <Routes>
                        <Route path="" element={
                            <div id="login">
                                <Login />
                            </div>
                        }></Route>
                    </Routes>
                    <Routes>
                        <Route path="inscription" element={
                            <div id="inscription">
                                <Inscription />
                            </div>
                        }></Route>
                    </Routes>
                </div>
            </div>
        </Container>
    );
}

export default Authentification;