import styled from "@emotion/styled";
import { useEffect } from "react";
import Nav from "../components/Nav";
import AproposComponent from "../components/AproposComponent";
const Container = styled.div`
    #apropos,#services{
        min-height:100vh;
        padding: 7%;
        background-color: inherit;
        margin: 30px 30px 0 30px;
        // border-radius: 10px;
        color: white;
    }
    #apropos div{
        // flex:1;
    }
    h1,h2,h3,h4,h5,h6{
        font-weight: 600;
        color: #F069AB;
        margin-bottom: 10px;
        margin-top: 10px;
    }
    .rose{
        font-weight: bolder;
        color: #F069AB;
    }
    .blue{
        font-weight: bolder;
        color: blue;
    }
    //DESKTOP VIEW
    @media screen and (min-width: 850px){
        #apropos{
            font-size: .9em;
        }
        h1,h2,h3,h4,h5,h6{
            font-size: 1.3em;
        }
    }
    //MOBILE VIEW
    @media screen and (max-width: 850px){
        #apropos,#service{
            font-size: 1em;
        }
    }
`
const Apropos = () => {
    useEffect(()=>{
        document.title = "Za Mandresy | A propos"
    },[])
    return (
        <Container>
            {/* <Nav /> */}
            <section id="apropos">
                <AproposComponent />
            </section>
        </Container>
    );
}

export default Apropos;