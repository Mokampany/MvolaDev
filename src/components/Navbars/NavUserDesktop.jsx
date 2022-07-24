import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/images/Za_Mandresy_Logos/logo.jpg"

const rose = "#F069AB";

const Container = styled.div`
    user-select: none;
    position: fixed;
    left: 0;
    right: 0;
    color: white;
    background-color: #1C1D1E ;
    display: flex;
    justify-content: space-between;
    align-items: start;
    height: 70px;
    padding: 10px 20px 0px 20px;
    @media (max-width: 1100px){
        display: none;
    }
`
const Left = styled.div`
`
const Logo = styled.img`
    border-radius: 50%;
    width: 50px;
    &:hover{
        cursor: pointer;
    }
`

const Right = styled.div`
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    align-items: center;
`
const Li = styled.div`
    margin-left: 75px;
    &:hover{
        cursor: pointer;
        color: ${rose};
    }
`
const Login = styled.button`
    margin-left: 75px;
    background-color: transparent;
    color: white;
    padding: 10px;
    transition: background-color .3s;
    border: 1px solid ${rose};
    &:hover{
        background-color: ${rose};
        color: white;
    }
`
const NavUserDesktop = ({handleNavigate,handleDisconnect}) => {
    return ( 
        <Container>
            <Left>
                <Logo onClick={() => handleNavigate("/homeUser")} src={logo} />
            </Left>
            <Right>
                <Li onClick={() => handleNavigate("/homeUser")}>Accueil</Li>
                <Li onClick={() => handleNavigate("/apropos")}>A propos</Li>
                <Login onClick={() => handleDisconnect("/authentification")}>Deconnexion</Login>
            </Right>
        </Container>
     );
}
 
export default NavUserDesktop;