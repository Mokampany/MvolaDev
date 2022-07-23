import styled from "@emotion/styled"

const Container = styled.div`
    position: absolute;
    height: 50px;
    top: 0;
    right: 0;
`
const Left = styled.div`
`
const Right = styled.div`

`
const Deconnexion = styled.div`
    padding: 10px 50px 10px 50px;
    background-color: #D42E2E;
    margin: 10px;
    color: white;
    border-radius: 50px;
    font-size: 12px;
    border: 1px solid red;
    &:hover{
        cursor: pointer;
        background-color: transparent;
        color: black;
    }
`
const NavbarAdmin = () => {
    const handleDisconnect = () => {
        console.log(`Disconnect`)
    }
    return ( 
        <Container>
            <Left>
                
            </Left>
            <Right>
                <Deconnexion onClick={handleDisconnect}>
                    Deconnexion
                </Deconnexion>
            </Right>
        </Container>
     );
}
 
export default NavbarAdmin;