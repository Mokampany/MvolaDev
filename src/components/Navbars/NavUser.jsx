import styled from "@emotion/styled";
import { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import NavUserDesktop from "./NavUserDesktop";

const rose = "#F069AB";
const bleu = "#040735";
const Container = styled.div`

`
const NavButton = styled.div`
    position: fixed;
    color: white;
    left: 0;
    right: 0;
    padding: 20px 20px 0px 20px;
    text-align: end;
    font-size: 30px;
    @media(min-width: 1100px){
        display: none;
    }
`
const Icon = styled.i`
    color:${rose};
    &:hover{
        cursor: pointer;
    }
`
const NavUserMobile = styled.div`
    position: fixed;
    inset: 0;
    transform: translateX(100%);
    min-height: 100vh;
    background-color: ${bleu};
    color: white;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    transition: transform 0.2s;
`
const ExitButton = styled.div`
    position: absolute;
    top:0;
    right: 0;
    padding: 20px 40px 0px 20px;
    text-align: end;
    font-size: 30px;
    &:hover{
        cursor: pointer;
    }
`
const Menu = styled.div`
    margin: 0 0 20px 0;
    font-weight: 900;
    // font-size: 30px;
    text-align: start;
    padding-left: 20px;
    user-select: none;
    &:hover{
        cursor: pointer;
    }
`
const NavGuest = () => {
    const navigate = useNavigate();
    const [displayMenuMobile, setDisplayMenuMobile] = useState(false);

    const reference = useRef();
    useEffect(() => {
        reference.current.style.transform = displayMenuMobile === true ? "translate(0%)" : "translate(100%)";
    }, [displayMenuMobile])

    const handleDisplayMenu = () => {
        setDisplayMenuMobile(!displayMenuMobile);
    }

    const handleNavigate = (destination) =>{
        setDisplayMenuMobile(false);
        navigate(destination);
    }
    const handleDisconnect = (destination) => {
        setDisplayMenuMobile(false);
        /*
        Some logic here
         */
        localStorage.setItem('idUser','')
        window.location = destination;
    }
    return (
        <Container>
            {/* NAVIGATION DESKTOP */}
            <NavUserDesktop handleNavigate = {handleNavigate} handleDisconnect = {handleDisconnect} />
            {/* NAVIGATION MOBILE */}
            <NavButton>
                <Icon onClick={handleDisplayMenu} className="fa-solid fa-bars-staggered"></Icon>
            </NavButton>
            <NavUserMobile ref={reference}>
                <ExitButton onClick={handleDisplayMenu} className="fa-solid fa-xmark"></ExitButton>
                <Menu onClick={()=>handleNavigate("/homeUser")}>Accueil</Menu>
                <Menu onClick={()=>handleNavigate("/apropos")}>A propos</Menu>
                <Menu onClick={()=>handleDisconnect("/authentification")}>Deconnexion</Menu>
            </NavUserMobile>
        </Container>
    );
}

export default NavGuest;