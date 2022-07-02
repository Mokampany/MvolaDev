import styled from "@emotion/styled"

const Container = styled.div`
    .login{
        font-size: 1.5em;
        text-align:start;
    }
    h1{
        font-size: 1.5em;
    }
    .form div{
        margin-bottom: 10px;
    }
`

const Login = () => {
    return (
        <Container>
            <div className="login">
                <h1>Se connecter</h1>
                <br />
                <form className="form">
                    <div className="row">
                        <input type="email" placeholder="adresse email"/>
                    </div>
                    <div className="row">
                        <input type="password" placeholder="mot de passe" />
                    </div>
                    <div className="row">
                        <button className="btn btn-primary">Se connecter</button>
                    </div>
                </form>
            </div>
        </Container>
    );
}

export default Login;