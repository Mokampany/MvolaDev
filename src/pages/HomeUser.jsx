import styled from "@emotion/styled";
import { useEffect } from "react";
import "react-alice-carousel/lib/alice-carousel.css";
import { useNavigate } from "react-router-dom";
import useTestAuth from "../services/useTestAuth";
const Container = styled.div`
  #home {
        margin: 30px 30px 0 30px;
        padding: 10px;
        min-height: 100vh;
        background-color: #282c34;
        border-radius: 10px;
        color: white;
    }   
`;
const HomeUser = () => {
    const navigate = useNavigate()
    const { idUser, isLoading } = useTestAuth()
    useEffect(() => {
        document.title = "Za Mandresy"
    }, [])
    return (
        <>
            <Container>
                <div id="home">
                    <h1 className="za-mandresy">Dashboard</h1>
                </div>
            </Container>
        </>
    );
};

export default HomeUser;
