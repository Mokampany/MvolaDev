import styled from "@emotion/styled";

const Container = styled.div`
    .tarifs h1{
        font-size: 40px;
        font-weight: 700;
    }
    .tarifs{
        min-height: 100vh;
        color: white;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .tarifs .bar{
        width: 100%;
        border-top: 1px solid #F069AB;
        margin: 0px 0 75px 0;
    }
    .tarifs-big-title{
        display: flex;
        flex-direction: column;
    }
    .rose{
        color: #F069AB;
    }
    .tarifs-list{
        display: flex;
        flex-direction: column;
        min-width: 250px;
        // margin: 0 20px 0 20px;
    }
    .tarif{
        min-height: 450px;
        background-color: #272727;
        margin-bottom: 20px;
        padding: 30px;
        position: relative;
    }
    .tarif-title h2{
        font-size: 24px;
        font-weight: 700;
        transition: color .3s;
    }
    .tarif-title h2:hover{
        cursor: default;
        color: #F069AB;
    }
    .tarif .bar{
        margin: 30px 0 30px 0;
    }
    .tarif-price .montant{
        font-size: 35px;
        font-weight: 700;
    }
    .tarif-price{
        margin-bottom: 50px;
        color: #F069AB;
    }
    .tarif-conditions{
        text-align:start;
    }
    .tarif-conditions ul{
        list-style: none;
    }
    .tarif-conditions ul li:before{
        content: "\\2022";
        color: #F069AB;
        font-weight: bold;
        display: inline-block; 
        width: 1em;
        margin-left: -1em;
    }
    .tarif-conditions ul li{
        margin-bottom: 15px;
        font-size: 14px;
    }
    .acheter{
        position: absolute;
        left: 50px;
        right: 50px;
        bottom: 30px;
        border: 1px solid #F069AB;
        padding: 10px;
        transition: background-color .3s;
        font-weight: 600;
    }
    .acheter:hover{
        cursor: pointer;
        background-color: #F069AB;
    }
    .tarif-premium h2{
        color: #FBF100;
    }
    .tarif-premium .tarif-price{
        color: #FBF100;
    }
    .tarif-premium .acheter{
        // background-color: #FBF100;
        border: 1px solid #FBF100;
        color: white;
    }
    .tarif-premium .acheter:hover{
        background-color: #FBF100;
        color: black;
    }

    //DESKTOP VIEW 850px
    @media screen and (min-width: 850px){
        .tarifs-list{
            padding: 0 2% 0 2%;
            width: 100%;
            display: flex;
            flex-direction: row;
            justify-content: space-around;
        }
        .tarifs-list .tarif{
        }
        .tarif-title h2{
            font-size: 30px;
        }
    }
    //DESKTOP VIEW 1100px
    @media screen and (min-width: 1100px){
        .tarifs-list{
            width: 90%;
        }
        .tarif{

        }
        .tarifs-big-title h1{
            font-size: 50px;
        }
        
    }
`
const TarifComponent = () => {
    return (
        <Container>
            <div className="tarifs">
                <div className="tarifs-big-title">
                    <div className="h1">
                        <h1>Nos tarifs</h1>
                    </div>
                    <div className="bar"></div>
                </div>
                <div className="tarifs-list">
                    <div className="tarif tarif-normal">
                        <div className="tarif-title">
                            <h2>Normal</h2>
                        </div>
                        <div className="bar"></div>
                        <div className="tarif-price">
                            <span className="montant">200 000 </span>
                            <span className="unite">Ar TTC</span>
                        </div>
                        <div className="tarif-conditions">
                            <ul>
                                <li>1 publication</li>
                                <li>4 photos maximum</li>
                                <li>0 video</li>
                            </ul>
                        </div>
                        <div className="acheter">
                            Acheter
                        </div>
                    </div>
                    <div className="tarif tarif-avance">
                        <div className="tarif-title">
                            <h2>Avancé</h2>
                        </div>
                        <div className="bar"></div>
                        <div className="tarif-price">
                            <span className="montant">350 000 </span>
                            <span className="unite">Ar TTC</span>
                        </div>
                        <div className="tarif-conditions">
                            <ul>
                                <li>1 publication</li>
                                <li>4 photos maximum</li>
                                <li>0 video</li>
                            </ul>
                        </div>
                        <div className="acheter">
                            Acheter
                        </div>
                    </div>
                    <div className="tarif tarif-premium">
                        <div className="tarif-title">
                            <h2>Premium</h2>
                        </div>
                        <div className="bar"></div>
                        <div className="tarif-price">
                            <span className="montant">500 000 </span>
                            <span className="unite">Ar TTC</span>
                        </div>
                        <div className="tarif-conditions">
                            <ul>
                                <li>1 publication</li>
                                <li>4 photos maximum</li>
                                <li>0 video</li>
                            </ul>
                        </div>
                        <div className="acheter">
                            Acheter
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
}

export default TarifComponent;