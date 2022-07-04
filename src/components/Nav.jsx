import styled from "@emotion/styled";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
const Container = styled.div`
    .show{
        display: block;
    }
    .hide{
        display: none;
    }
    nav .link{
        text-decoration: none;
        color: white;
        margin: 0 20px 0 20px;
    }
    @media screen and (max-width: 800px){
        .nav-desktop{
            display: none;
        }
        .nav-mobile-button{
            display: block;
            background-color: #282c34;
            color: white;
            min-height: 50px;
            display: flex;
            align-items: center;
            justify-content: end;
        }
        .nav-mobile{
            display: none;
            flex-flow: column;
            background-color: #282c34;
            color: white;
            text-align: end;
        }
        .nav-mobile .link{
            padding: 10px;
            border-top: 1px solid grey;
        }
    }
    @media screen and (min-width: 800px){
        .nav-desktop{
            margin:0;
            padding: 0;
            background-color: #282c34 ;
            color: white;
            min-height: 3em;
            left:0;
            right: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1em;
        }
        .nav-mobile-button{
            display: none;
        }
        .nav-mobile{
            display: none;
        }
    }
`
const Nav = () => {
    const DISPLAYS = {
        FLEX: "flex",
        NONE: "none"
    }
    const navMobile = useRef(null)
    const handleDisplayMobileMenu = () => {
        navMobile.current.style.display = navMobile.current.style.display === DISPLAYS.FLEX ? DISPLAYS.NONE : DISPLAYS.FLEX
    }

    return (
        <Container>
            <nav className="nav-desktop">
                <Link className="link" to="/">Logo</Link>
                <Link className="link" to="/">Accueil</Link>
                <Link className="link" to="/">Service</Link>
                <Link className="link" to="/">A propos de nous</Link>
                <Link className="link" to="/">Parametres</Link>
                <Link className="link" to="/">Mon compte</Link>
                <Link className="link" to="/authentification">Authentification</Link>
            </nav>
            <nav className="nav-mobile-button">
                <i onClick={handleDisplayMobileMenu} style={{ marginRight: "20px" }} className="fa-solid fa-bars-staggered"></i>
            </nav>
            <nav ref={navMobile} className={`nav-mobile`}>
                <Link className="link" to="/">Accueil</Link>
                <Link className="link" to="/">Service</Link>
                <Link className="link" to="/">A propos de nous</Link>
                <Link className="link" to="/">Parametres</Link>
                <Link className="link" to="/">Mon compte</Link>
                <Link className="link" to="/authentification">Authentification</Link>
            </nav>
        </Container>
    );
}

export default Nav;