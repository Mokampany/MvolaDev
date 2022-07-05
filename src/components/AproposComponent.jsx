import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.jpg"

const Container = styled.div`

`
const AproposComponent = () => {
    return (
        <Container>
            <div>
                <img style={{ borderRadius: "20px" }} width="200vw" src={logo} alt="logo" />
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
        </Container>
    );
}

export default AproposComponent;