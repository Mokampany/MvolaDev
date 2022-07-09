import styled from "@emotion/styled";

const Container = styled.div`
    .rose{
        color: #F069AB;
    }
    .content{
        color: white;
        min-height: 100vh;
    }
    //Mobile view +
    @media screen and (min-width: 50px){
        .content h1{
            font-size: 40px;
            font-weight: 700;
        }
        .content{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
        .content .left{
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        .content .bar{
            width: 75%;
            border-top: 1px solid #F069AB;
            margin: 10px 0 30px 0;
            text-align:center;
        }
        .content .text{
            line-height: 300%;
            text-align: start;
            padding:0 30px 0 30px;
            color: #C6C6C6;
        }
    }
    //Desktop view
    @media screen and (min-width: 1100px){
        .content h1{
            font-size: 64px;
            font-weight: 700;
            // display: none;
        }
        .content .left{
        }
        .content{
            display: grid;
            grid-template-columns: 50% 1% auto;
        }
        .content .vertical-bar{
            height: 60%;
            border-left: 1px solid #F069AB;
        }
        .content .bar{
            width: 50%;
        }
        .content .text{
            font-size: 20px;
            line-height: 250%;
            text-align: start;
            padding:0 30px 0 30px;
        }
    }
`
const AproposComponent = () => {
    return (
        <Container>
            <div className="content">
                <div className="left">
                    <div className="title">
                        <h1>A propos</h1>
                    </div>
                    <div className="bar"></div>
                </div>
                <div className="vertical-bar"></div>
                <div className="right">
                    <div className="text">
                        <span className="rose">Za Mandresy</span> est une entreprise basée à <span className="rose">Madagascar</span>, proposant
                        des services de <span className="rose">publicité</span> et de
                        <span className="rose"> placement de produit</span> à ses clients.
                        Nous sommes actuellement présents sur la plateforme facebook,
                        rassemblant plus de <span className="rose">81 000 utilisateurs abonnés</span> sur
                        la page facebook principale <span className="rose"><b>Za Mandresy</b></span> .
                    </div>
                </div>
            </div>
        </Container>
    );
}

export default AproposComponent;