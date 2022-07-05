import styled from "@emotion/styled";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Nav from "../components/Nav";
import logo from "../assets/images/logo.jpg"
import AproposComponent from "../components/AproposComponent";
import ServicesComponent from "../components/ServicesComponent";
const Container = styled.div`
    section{
        min-height:100vh;
        padding: 50px 20px 50px 20px;
        background-color: white;
        margin: 30px 30px 0 30px;
        border-radius: 10px;
    }
    #apropos{
        
    }
    #apropos div{
        // flex:1;
    }
    h1,h2,h3,h4,h5,h6{
        font-weight: 600;
        color: #F069AB;
        margin-bottom: 10px;
        margin-top: 10px;
    }
    .rose{
        font-weight: bolder;
        color: #F069AB;
    }
    .blue{
        font-weight: bolder;
        color: blue;
    }
    ul{
        list-style-type: none;
    }
    ul li{
        font-size: 1.5em;
        font-weight: bolder;
    }
    //DESKTOP VIEW
    @media screen and (min-width: 850px){
        #apropos{
            font-size: 1em;
        }
        h1,h2,h3,h4,h5,h6{
            font-size: 1.4em;
        }
    }
`
const Apropos = () => {
    useEffect(() => {
        document.title = "A propos"
    }, [])
    return (
        <Container>
            <Nav />
            <section id="apropos">
                <AproposComponent />
            </section>
            <section>
                <ServicesComponent />
            </section>
        </Container>
    );
}

export default Apropos;