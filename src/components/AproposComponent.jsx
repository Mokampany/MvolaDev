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
            <div className="">
                <h1><i className="fa-solid fa-eject"></i> A propos</h1>
                <span className="rose">Za Mandresy</span> est une entreprise basée à Madagascar,
                <br />
                proposant des services de <span className="rose">publicité</span> à ses clients.
                <br />
                Nous sommes actuellement présents sur la plateforme <span className="blue">facebook</span>,
                <br />
                rassemblant plus de <span className="rose">81 000 utilisateurs</span> abonnés sur 
                <br />
                la page <span className="blue">facebook </span>
                principale <a className="rose" href="https://web.facebook.com/ZaMandresy.Prod" rel="noreferrer" target="_blank">Za Mandresy</a>
                <br />
                <br />
            </div>
            <div>
                <h2><i className="fa-brands fa-facebook"></i> Pourquoi facebook?</h2>
                <span className="blue">Facebook</span> est une plateforme de réseau
                social regroupant
                plus de <span className="rose">3.05 millions</span> de Malagasy,
                <br />
                soit environ <span className="rose">10.6%</span> de la population.(Un gros chiffre)
                <br />
            </div>
        </Container>
    );
}

export default AproposComponent;