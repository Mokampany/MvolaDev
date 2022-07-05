import styled from "@emotion/styled";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Nav from "../components/Nav";
import logo from "../assets/images/logo.jpg"
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
                <div>
                    <img style={{borderRadius:"20px"}} width="200vw" src={logo} alt="logo" />
                </div>
                <div>
                    <h1><i class="fa-solid fa-eject"></i> A propos</h1>
                    <span className="rose">Za Mandresy</span> est une entreprise basée à Madagascar,
                    composée de plusieurs influenceurs Malagasy.
                    <br />
                    Nous sommes actuellement présents sur la plateforme <span className="blue">facebook</span>,
                    rassemblant plus de <span className="rose">81 000 utilisateurs</span> abonnés sur la
                    page <span className="blue">facebook</span> principale <Link className="rose" to="">Za Mandresy</Link>
                    <br />
                </div>
                <div>
                    <h2><i class="fa-brands fa-facebook"></i> Pourquoi facebook?</h2>
                    D'après nos sources, <span className="blue">facebook</span> est la plateforme regroupant
                    plus de <span className="rose">3.05 millions</span> de Malagasy,
                    soit environ <span className="rose">10.6%</span> de la population.(C'est un gros chiffre)
                    <br />
                </div>
            </section>
            <section>
                <h1>Nos services</h1>
            </section>
        </Container>
    );
}

export default Apropos;