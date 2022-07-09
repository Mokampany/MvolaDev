import styled from "@emotion/styled";

const Container = styled.div`
    .footer{
        color: #C6C6C6;
        min-height: 3em;
        font-size: 14px;
    }
`

const Footer = () => {
    return (
        <Container>
            <div className="footer">
                Copyright all right reserved 2022.
            </div>
        </Container>
    );
}

export default Footer;