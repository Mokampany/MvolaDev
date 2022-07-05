import styled from "@emotion/styled";
import Nav from "../components/Nav";

const Container = styled.div`
    .four-oh-four{
        min-height: 100vh;
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`
const FourOhFour = () => {
    return (
        <Container>
            <Nav />
            <div className="four-oh-four">
                404 Not found
            </div>
        </Container>
    );
}

export default FourOhFour;