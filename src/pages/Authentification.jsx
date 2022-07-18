import {
    Route,
    Routes,
} from "react-router-dom";

import styled from "@emotion/styled"
import Inscription from "../components/Inscription";
import Login from "../components/Login";
import { useEffect} from "react"
import Nav from "../components/Nav";
import logo from "../assets/images/Illustrations/secure_login.png"

const Container = styled.div`
    color: black;
    // margin-top: 100px;
`
const Authentification = () => {
    useEffect(() => {
        document.title = "Authentification"
    }, [])
    return (
        <Container>
            <Routes>
                <Route path="" element={<Login />}></Route>
                <Route path="/inscription" element={<Inscription />}></Route>
            </Routes>
        </Container>
    );
}

export default Authentification;