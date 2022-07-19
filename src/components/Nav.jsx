import styled from "@emotion/styled";
import useTestAuth from "../services/useTestAuth";
import NavGuest from "./Navbars/NavGuest";
import NavUser from "./Navbars/NavUser";
const Container = styled.div`
`
const Nav = () => {
    const { idUser } = useTestAuth()
    return (
        <Container>
            {idUser ? <NavUser /> : <NavGuest />}
        </Container>
    );
}

export default Nav;
