import styled from "@emotion/styled"
import bg from "../assets/images/bg.png"
import Nav from '../components/Nav'
const Container = styled.div`
    #home{
        padding: 10px;
        min-height: 100vh;
        background-color: white;
    }
`
const Home = () => {
    return (
        <>
            <Container>
                <Nav />
                <div id="home">
                    Home page
                </div>
            </Container>
        </>
    );
}

export default Home;