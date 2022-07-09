import styled from "@emotion/styled";
import { useEffect } from "react";
import Nav from "../components/Nav";
import AproposComponent from "../components/Apropos/AproposComponent";
import ServicesComponent from "../components/Apropos/ServicesComponent";
const Container = styled.div`
`
const Apropos = () => {
    useEffect(() => {
        document.title = "Za Mandresy | A propos"
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
            
        </Container>
    );
}

export default Apropos;