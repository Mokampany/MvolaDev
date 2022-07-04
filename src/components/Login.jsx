import styled from "@emotion/styled"
import {useState} from "react"
const Container = styled.div`
    .login{
        font-size: 1em;
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
    const[email,setEmail] = useState(null)
    const[mdp, setMdp] = useState(null)
    const handleChangeEmail = (e) => {
        setEmail(e.target.value)
    }
    const handleChangeMdp = (e) => {
        setMdp(e.target.value)
    }
    const handleSubmitLogin = () => {
        console.log(email)
    }
    return (
        <Container>
            <div className="login">
                <h1>Se connecter</h1>
                <br />
                <form className="form">
                    <div className="row">
                        <input onChange={handleChangeEmail} type="email" placeholder="adresse email"/>
                    </div>
                    <div className="row">
                        <input onChange={handleChangeMdp} type="password" placeholder="mot de passe" />
                    </div>
                    <div className="row">
                        <span onClick={handleSubmitLogin} className="btn btn-primary">Se connecter</span>
                    </div>
                </form>
            </div>
        </Container>
    );
}

export default Login;