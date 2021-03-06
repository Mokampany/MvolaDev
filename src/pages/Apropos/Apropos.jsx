import styled from "@emotion/styled";
import { useEffect } from "react";
import AproposComponent from "../../components/Apropos/AproposComponent";
import ServicesComponent from "../../components/Apropos/ServicesComponent";
import TarifComponent from "../../components/Apropos/TarifComponent";
const Container = styled.div`
`
const Apropos = () => {
    useEffect(() => {
        document.title = "Za Mandresy | A propos"
        window.scroll(0,0);
    }, [])

    return (
        <Container>
            {/* <Nav /> */}
            <section id="apropos">
                <AproposComponent />
            </section>
            <section id="services">
                <ServicesComponent />
            </section>
            <section id="tarif">
                <TarifComponent />
            </section>
        </Container>
    );
}

export default Apropos;