import styled from "@emotion/styled";
import { useEffect } from "react";
import "react-alice-carousel/lib/alice-carousel.css";
import { useNavigate } from "react-router-dom";
import useTestAuth from "../services/useTestAuth";
const bgColor = "#0E102E";

const Container = styled.div`
    padding-top: 100px;
    min-height: 100vh;
    background-color: ${bgColor};
    color: white;
`;
const H1 = styled.h1`
    font-weight: 900;
    user-select: none;
`

const HomeUser = () => {
    const navigate = useNavigate()
    const { idUser, isLoading } = useTestAuth()
    useEffect(() => {
        if (!idUser && !isLoading) {
            navigate("/homeGuest")
        }
    }, [idUser, isLoading, navigate])
    useEffect(() => {
        document.title = "Za Mandresy"
    }, [])
    return (
        <>
            <Container>
                {isLoading &&
                    <div></div>
                }
                {idUser &&
                    <H1>
                        Tableau de bord
                    </H1>
                }
            </Container>
        </>
    );
};

export default HomeUser;
