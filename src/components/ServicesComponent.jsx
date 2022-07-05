import styled from "@emotion/styled";

const Container = styled.div`
    .services{
        display: flex;
        flex-direction: column;
    }
    .services section{
        display: grid;
        grid-template-columns: 50% auto;
    }
    .services section div{
        background-color: #282c34;
        margin: 10px;
        color: white;
        border-radius: 5px;
        min-height: 300px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    //MOBILE VIEW
    @media screen and (max-width: 850px){
        .services section{
            display: flex;
            flex-direction: column;
        }
    }
`
const ServicesComponent = () => {
    return (
        <Container>
            <h1><i class="fa-solid fa-handshake-angle"></i> Nos services</h1>
            <div className="services">
                <section>
                    <div>
                        Publicité
                    </div>
                    <div>
                        Placement de produit
                    </div>
                </section>
                <section>
                    <div>
                        
                    </div>
                    <div>

                    </div>
                </section>
            </div>
        </Container>
    );
}

export default ServicesComponent;