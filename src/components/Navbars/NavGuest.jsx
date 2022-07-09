import styled from "@emotion/styled";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.jpg"

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
    // background-color: black;
}
nav .link:hover{
    color : #F069AB;
    text-decoration: #F069AB;
}
.nav-desktop, .nav-mobile{
    user-select: none;
}
.authentification-button{
    text-decoration: none;
    margin: 0 20px 0 20px;
    color: white;
    padding: 10px;
    cursor:pointer;
    border: 2px solid #F069AB;
    transition: background-color .3s;
}
.authentification-button:hover{
    background-color: #F069AB;
}
//DISPLAY MOBILE
@media screen and (min-width: 50px){
    .nav-desktop{
        display: none;
    }
    .nav-mobile-button{
        display: grid;
        grid-template-columns: 45% 25% auto;
        background-color: inherit;
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
        background-color: inherit;
        color: white;
        text-align: end;
    }
    .nav-mobile .link{
        padding: 10px;
        border-top: 1px solid #F069AB;
    }
    .authentification-button{
        background-color: #F069AB;
        color: white;
    }
}
//DISPLAY DESKTOP
@media screen and (min-width: 1100px){
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
        padding: 10px;
        background-color: #1C1D1E ;
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
        font-size: .8rem;
        align-items: center;
    }
    .authentification-button{
        background-color: transparent;
    }
}
.link-accueil{
}
`
const NavGuest = () => {
    const DISPLAYS = {
        FLEX: "flex",
        NONE: "none"
    }
    const navMobile = useRef(null)
    const accueilRef = useRef(null)
    const aproposRef = useRef(null)
    const loginRef = useRef(null)

    const handleChangeColor = (ref) => {
        // console.log(ref.current.style)
    }
    const handleChangeColorAccueil = () =>{
        handleChangeColor(accueilRef)
    }
    const handleChangeColorAPropos = () => {
        handleChangeColor(aproposRef)
    }
    const handleDisplayMobileMenu = () => {
        navMobile.current.style.display = navMobile.current.style.display === DISPLAYS.FLEX ? DISPLAYS.NONE : DISPLAYS.FLEX
    }
    return (
        <Container>
            <nav className="nav-desktop">
                <div className="nav-left-desktop">
                    <Link className="link" to="/homeGuest">
                        <img style={{ borderRadius: "50%" }} width="50" height={50} src={logo} alt="Logo za mandresy" /> <span style={{ color: "#F069AB" }}>Za Mandresy</span>
                    </Link>
                </div>
                <div className="nav-right-desktop">
                    <Link ref={accueilRef} onClick={handleChangeColorAccueil} className="link link-accueil" to="/homeGuest">Accueil</Link>
                    <Link ref={aproposRef} onClick={handleChangeColorAPropos} className="link link-apropos" to="/apropos">A propos</Link>
                    <Link ref={loginRef} className="authentification-button" to="/authentification">Login/Inscription</Link>
                    <div className="theme">
                        {/* Theme */}
                    </div>
                </div>
            </nav>
            <nav className="nav-mobile-button">
                <div className="logo-mobile">
                    <Link className="link" to="/homeGuest">
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
                <Link ref={accueilRef} className="link link-accueil" to="/homeGuest">Accueil</Link>
                <Link ref={aproposRef} className="link link-apropos" to="/apropos">A propos</Link>
                <Link ref={loginRef} className="authentification-button" to="/authentification">Login/Inscription</Link>
            </nav>
        </Container>
    );
}

export default NavGuest;