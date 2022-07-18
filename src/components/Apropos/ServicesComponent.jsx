import styled from "@emotion/styled";
import boost from "../../assets/images/Illustrations/boost-illustration.png"
import socialMedia from "../../assets/images/Illustrations/social-media-illustration.png"

const Container = styled.div`
    .content-service{
        color: black;
        min-height: 100vh;
    }
    .content-service h1{
        font-size: 40px;
        font-weight: 700;
    }
    .content-service .bar{
        width: 75%;
        border-top: 1px solid #F069AB;
        margin: 10px 0 75px 0;
    }
    .rose{
        color: #F069AB;
    }
    // Mobile view +
    @media screen and (min-width: 50px){
        .content-service{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
        .content-service .right {
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        .content-service .left{
            text-align: start;
            padding: 0px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
        .boost-publicite{
            display: grid;
            grid-template-columns: 50% auto;
            margin-bottom: 40px;
        }
        .boost-publicite .illustration{
            width: 75%;
            height: 75%;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .boost-publicite .text-field{
            display: flex;
            flex-flow: column;
            justify-content: center;
        }
        .placement-produit{
            display: grid;
            grid-template-columns: 50% auto;
        }
        .placement-produit .text-field{
            display: flex;
            flex-flow: column;
            // justify-content: end;
        }
        .placement-produit .illustration{
            display: flex;
            flex-flow: column;
            justify-content: center;
            align-items: center;
        }
        .content-service .text-field{
            // width: 100%;
            padding-right: 10px;
        }
        .content-service .text{
            font-size: 14px;
            color: #414141;
        }
        .content-service .title h2{
            font-size: 22px;
            font-weight: 700;
        }
    }
    //Desktop view
    @media screen and (min-width: 1100px){
        .content-service .right{
        }
        .content-service h1{
            font-size: 50px;
            font-weight: 700;
        }
        .content-service{
            display: grid;
            grid-template-columns: 50% 1% auto;
        }
        .content-service .vertical-bar{
            height: 60%;
            border-left: 1px solid #F069AB;
        }
        .content-service .text{
            font-size: 14px;
        }
        .content-service .title h2{
            font-size: 45px;
            font-weight: 700;
        }
        .content-service .bar{
            width: 50%;
        }
    }
`
const ServicesComponent = () => {
    return (
        <Container>
            <div className="content-service">
                <div className="right">
                    <div className="title">
                        <h1>Nos services</h1>
                    </div>
                    <div className="bar"></div>
                </div>
                <div className="vertical-bar"></div>
                <div className="left">
                    <div className="boost-publicite">
                        <div className="illustration">
                            <img src={boost} alt="boost-illustration" />
                        </div>
                        <div className="text-field">
                            <div className="title">
                                <h2>Boost de <span className="rose">publicités</span></h2>
                            </div>
                            <div className="text">
                                Grâce à nos services, vous serez en mesure de booster vos publicités
                            </div>
                        </div>
                    </div>
                    <div className="placement-produit">
                        <div className="illustration">
                            <img src={socialMedia} alt="social-media-illustration" />
                        </div>
                        <div className="text-field">
                            <div className="title">
                                <h2>Placement de <span className="rose">produit</span></h2>
                            </div>
                            <div className="text">
                                Nous sommes là pour augmenter vos ventes grâce à nos services de placement de produit
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
}

export default ServicesComponent;