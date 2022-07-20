import styled from "@emotion/styled";
import boost from "../../assets/images/Illustrations/boost-illustration.png"
import socialMedia from "../../assets/images/Illustrations/social-media-illustration.png"
import business_bg from "../../assets/images/Backgrounds/business_bg.jpg";
const rose = "#F069AB";
const gris = "#414141";

const Container = styled.div`
    min-height: 100vh;
    color: white;
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
    background-image: url(${business_bg});
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    @media (max-width: 800px){
        background-size: auto;
    }
`
const Left = styled.div`
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 50px;

`
const H1 = styled.h1`
    font-weight: 800;
    font-size: 50px;
    @media (max-width: 1100px){
        font-size: 30px;
    }
`
const Bar = styled.div`
    border-top: 3px solid ${rose};
    width: 75%;
`
const VerticalBar = styled.div`
`
const Right = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
`
const Service = styled.div`
    display: flex;
    flex-flow: row;
    justify-content: center;
    margin: 50px 50px 50px 50px;
    background-color: white;
    color: black;
    padding: 40px;
    border-radius: 20px;
    width: 75%;
    @media (max-width: 800px){
        margin: 0px;
        margin-bottom: 50px;
    }
    
`
const Illustation = styled.img`
    text-align: start;
    margin-right: 20px;
    @media (max-width: 800px){
        width: 50%;
        height: 50%;
    }
`
const TextService = styled.div`
    max-width: 25ch;
    text-align: start;
`
const TitleService = styled.h2`
    font-weight: 800;
    font-size: 20px;
    min-height: 50px;
    @media (max-width: 800px){
        font-size: 20px;
    }
    @media (max-width: 500px){
        // font-size: 25px;
    }
`
const DescriptionService = styled.div`
    font-size: 16px;
    font-weight: 500;
    color: ${gris};
    @media (max-width: 1100px){
        font-size: 16px;
    }
    @media (max-width: 500px){
        font-size: 14px;
    }
`
const ServicesComponent = () => {
    return (
        <>
            <Container>
                <Left>
                    <H1>
                        Nos services
                    </H1>
                    <Bar />
                </Left>
                <VerticalBar></VerticalBar>
                <Right>
                    <Service>
                        <Illustation src={boost} alt="boost-illustration" />
                        <TextService>
                            <TitleService>
                                Boost de <span className="rose">publicités</span>
                            </TitleService>
                            <DescriptionService>
                                Grâce à nos services, vous serez en mesure de booster vos publicités de manière efficace.
                            </DescriptionService>
                        </TextService>
                    </Service>
                    <Service>
                        <Illustation src={socialMedia} alt="social-media-illustration" />
                        <TextService>
                            <TitleService>
                                Placement de <span className="rose">produit</span>
                            </TitleService>
                            <DescriptionService>
                                Nous sommes là pour augmenter vos ventes grâce à nos services de placement de produit
                            </DescriptionService>
                        </TextService>
                    </Service>
                </Right>
            </Container>
        </>
    );
}

export default ServicesComponent;