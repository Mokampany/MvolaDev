import styled from "@emotion/styled";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Nav from "../components/Nav";

const Container = styled.div`
    section{
        min-height:100vh;
    }
    #apropos{
        margin: 30px 30px 0 30px;
        padding: 10px;
        background-color: white;
        border-radius: 10px;
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
`

const Apropos = () => {
    useEffect(() => {
        document.title = "A propos"
    }, [])
    return (
        <Container>
            <Nav />
                <section id="apropos">
                    <h1>A propos</h1>
                    <span className="rose">Za Mandresy</span> une entreprise basée à Madagascar,
                    composée de plusieurs influenceurs Malagasy.
                    <br />
                    Nous sommes actuellement présents sur la plateforme facebook,
                    rassemblant plus de <span className="rose">81 000 utilisateurs</span> abonnés à notre page
                    facebook principale <Link className="rose" to="">Za Mandresy</Link>
                    <br />
                    <h2>Pourquoi facebook?</h2>
                    D'après nos sources, <span className="blue">facebook</span> est la plateforme regroupant 
                    plus de <span className="rose">3.05 millions</span> de Malagasy, 
                    soit environ <span className="rose">10.6%</span> de la population Malagasy (c'est un gros chiffre).
                    <br />
                </section>
                <section>
                    qwd
                </section>
        </Container>
    );
}

export default Apropos;