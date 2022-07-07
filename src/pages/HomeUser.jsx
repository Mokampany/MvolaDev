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
        background-color: inherit;
        border-radius: 10px;
        color: white;
    }   
`;
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
                <div id="home">
                    {isLoading &&
                    <div></div>
                    }
                    {idUser &&
                        <h1 className="za-mandresy">
                            Tableau de bord
                        </h1>
                    }
                </div>
            </Container>
        </>
    );
};

export default HomeUser;
