import styled from "@emotion/styled";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.jpg"
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
            display: grid;
            grid-template-columns: 40% 25% auto;
            background-color: #1E2025;
            color: white;
            min-height: 50px;
            align-items: center;
            padding: 10px;
        }
        .logo-mobile{
            text-align: start;
        }
        .entreprise-mobile{
            text-align: start;
            font-size: .8em;
            font-weight: 600;
            color: #F069AB;
        }
        .menu-button-mobile{
            text-align: end;
        }
        .nav-mobile{
            display: none;
            flex-flow: column;
            // background-color: #282c34;
            background-color: #1E2025;
            color: white;
            text-align: end;
        }
        .nav-mobile .link{
            padding: 10px;
            border-top: 1px solid grey;
        }
    }
    @media screen and (min-width: 800px){
        .nav-mobile-button{
            display: none;
        }
        .nav-mobile{
            display: none;
        }
        .nav-desktop{
            display: grid;
            grid-template-columns: 20% auto;
            margin:0;
            padding: 5px;
            background-color: #1E2025 ;
            color: white;
            min-height: 3em;
            left:0;
            right: 0;
            align-items: center;
            // justify-content: start;
            font-size: 1em;
        }
        .nav-left-desktop{
            display: flex;
        }
        .nav-right-desktop{
            display: flex;
            justify-content: end;
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
                <div className="nav-left-desktop">
                    <Link className="link" to="/">
                        <img style={{ borderRadius: "50%" }} width="50" height={50} src={logo} alt="Logo za mandresy" /> <span style={{color: "#F069AB"}}>Za Mandresy</span>
                    </Link>
                </div>
                <div className="nav-right-desktop">
                    <Link className="link" to="/">Accueil</Link>
                    <Link className="link" to="/">Service</Link>
                    <Link className="link" to="/apropos">A propos de nous</Link>
                    <Link className="link" to="/">Parametres</Link>
                    <Link className="link" to="/">Mon compte</Link>
                    <Link className="link" to="/authentification">Authentification</Link>
                </div>
            </nav>
            <nav className="nav-mobile-button">
                <div className="logo-mobile">
                    <Link className="link" to="/">
                        <img style={{ borderRadius: "50%" }} width="50" height={50} src={logo} alt="Logo za mandresy" />
                    </Link>
                </div>
                <div className="entreprise-mobile">
                    Za Mandresy
                </div>
                <div className="menu-button-mobile">
                    <i onClick={handleDisplayMobileMenu} style={{ marginRight: "20px" }} className="fa-solid fa-bars-staggered"></i>
                </div>
            </nav>
            <nav ref={navMobile} className={`nav-mobile`}>
                <Link className="link" to="/">Accueil</Link>
                <Link className="link" to="/">Service</Link>
                <Link className="link" to="/apropos">A propos de nous</Link>
                <Link className="link" to="/">Parametres</Link>
                <Link className="link" to="/">Mon compte</Link>
                <Link className="link" to="/authentification">Authentification</Link>
            </nav>
        </Container>
    );
}

export default Nav;