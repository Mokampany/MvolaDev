import styled from "@emotion/styled";
import Nav from "../components/Nav";

const Container = styled.div`
    #apropos{
        margin: 30px 30px 0 30px;
        padding: 10px;
        min-height: 100vh;
        background-color: white;
        border-radius: 10px;
    }
`

const Apropos = () => {
    return (
        <Container>
            <Nav />
            <div id="apropos">
                <h1>A propos</h1>
            </div>
        </Container>
    );
}

export default Apropos;